const MBTI_TYPES = [
    "ISTJ", "ISFJ", "INFJ", "INTJ", 
    "ISTP", "ISFP", "INFP", "INTP", 
    "ESTP", "ESFP", "ENFP", "ENTP", 
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
];

const compatibilityData = {
    "INFP": { "ENFJ": 5, "ENTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "ENTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "INFJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFJ": { "INFP": 5, "ISFP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    
    "INTJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "ENTJ": { "INFP": 5, "INTP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "INTP": { "ENTJ": 5, "ESTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ENFJ": 2 },
    "ENTP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ESTJ": 2 },

    "ISFP": { "ESFJ": 5, "ESTJ": 5, "ENFJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTP": { "ESFJ": 5, "ESTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },

    "ISFJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFJ": { "ISFP": 5, "ISTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTJ": { "ISFP": 5, "ISTP": 5, "INTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "ENTP": 2 }
};

const PLACES = [
    { id: 'apt', name: '아파트', type: 'home' },
    { id: 'mart', name: '마트', type: 'out' },
    { id: 'cafe', name: '카페', type: 'out' },
    { id: 'school', name: '학교', type: 'out' },
    { id: 'restaurant', name: '식당', type: 'out' },
    { id: 'company', name: '회사', type: 'out' },
    { id: 'travel', name: '여행지', type: 'travel' }
];

const WORD_SETS = {
    genre: ['SF', '로맨스', '추리', '무협', '판타지', '공포', '역사', '자기계발'],
    food: ['김치찌개', '된장찌개', '파스타', '스테이크', '라면', '치킨', '삼겹살', '샐러드', '떡볶이'],
    hobby: ['유튜브', '넷플릭스', '게임', '음악', '영화', '홈트레이닝'],
    study: ['수학', '영어', '코딩', '철학', '경제', '역사', '디자인'],
    topic: ['연예인', '주식', '날씨', '취미', '과거', '미래', '고민', '맛집'],
    book: ['만화책', '잡지', '소설책', '에세이'],
    destination: ['제주도', '부산', '강릉', '여수', '대전', '오사카', '도쿄', '파리', '런던', '하와이', '방콕']
};

const ACTIONS = [
    { id: 'rest', name: '휴식', place: 'apt', text: ['침대에서 뒹굴거렸다', '낮잠을 잤다', '멍하니 창밖을 보았다', '스마트폰을 했다'] },
    { id: 'leisure', name: '여가', place: 'apt', text: ['{hobby}을(를) 즐겼다', '새로운 취미를 찾았다'] },
    { id: 'cooking', name: '요리', place: 'apt', text: ['{food}을(를) 만들어 먹었다', '새로운 {food} 레시피를 시도했다'] },
    { id: 'work', name: '업무', place: 'company', text: ['보고서를 작성했다', '회의에 참석했다', '야근을 했다', '메일을 확인했다'] },
    { id: 'study', name: '공부', place: 'school', text: ['{study} 전공 서적을 읽었다', '과제를 수행했다', '시험 공부를 했다'] },
    { id: 'gathering', name: '모임', place: 'cafe', text: ['{topic}에 대해 수다를 떨었다', '커피를 마시며 쉬었다', '인생 상담을 했다'] },
    { id: 'read', name: '독서', place: 'apt', text: ['{genre} 소설을 읽었다', '{genre} 만화책을 봤다'] },
    { id: 'eat', name: '식사', place: 'restaurant', text: ['{food}을(를) 사 먹었다', '배부르게 밥을 먹었다'] },
    { id: 'shop', name: '쇼핑', place: 'mart', text: ['장을 봤다', '생필품을 샀다', '충동구매를 했다', '할인 상품을 샀다'] },
    { id: 'walk', name: '산책', place: 'apt', text: ['복도를 걸어다녔다', '단지 내를 산책했다', '바람을 쐬었다'] },
    { id: 'travel', name: '여행', place: 'travel', text: ['{destination}에서 즐거운 시간을 보냈다', '{destination}의 맛집을 탐방했다', '{destination}의 풍경을 구경했다'] }
];

const EVENTS = [
    { type: 'fight', name: '싸움', change: -15, text: '와(과) 사소한 문제로 크게 다퉜다' },
    { type: 'confess', name: '고백', change: 0, text: '에게 마음을 담아 고백했다' }, 
    { type: 'cut', name: '절교', change: -30, text: '와(과)의 연을 끊기로 했다' },
    { type: 'friend', name: '친교', change: 10, text: '와(과) 급격히 친해졌다' },
    { type: 'reconcile', name: '화해', change: 15, text: '와(과) 서로 사과하고 화해했다' },
    { type: 'breakup', name: '이별', change: 0, text: '에게 이별을 고했다' },
    { type: 'gift', name: '선물', change: 10, text: '에게 작은 선물을 주었다' }
];

let characters = [];
let day = 1;
let logs = [];
let affectionMode = false;
let isDarkMode = false;

window.onload = () => {
    initMbtiSelect();
    initRoomSelect();
    renderCharacterList();
    renderLocations();
    updateUI();
    
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        isDarkMode = true;
    }
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function hasJongseong(char) {
    if (!char) return false;
    const code = char.charCodeAt(0);
    return (code - 0xAC00) % 28 > 0;
}

function getJosa(word, type) {
    const lastChar = word.charAt(word.length - 1);
    const has = hasJongseong(lastChar);
    
    if (type === '은/는') return has ? '은' : '는';
    if (type === '이/가') return has ? '이' : '가';
    if (type === '을/를') return has ? '을' : '를';
    if (type === '와/과') return has ? '과' : '와';
    return '';
}

function fillTemplate(text) {
    let replaced = text.replace(/{(\w+)}/g, (match, key) => {
        const words = WORD_SETS[key];
        return words ? getRandom(words) : match;
    });

    replaced = replaced.replace(/(\S+)\((은\/는|이\/가|을\/를|와\/과)\)/g, (match, word, josa) => {
        return word + getJosa(word, josa);
    });

    return replaced;
}

function calculateChemistry(mbti1, mbti2) {
    if (!compatibilityData[mbti1] || !compatibilityData[mbti1][mbti2]) return 3;
    return compatibilityData[mbti1][mbti2];
}

function getRelationshipLabel(score, specialStatus) {
    if (specialStatus === 'lover') return "💖 연인";
    if (score <= -80) return "원수";
    if (score <= -60) return "혐오";
    if (score <= -40) return "적대";
    if (score <= -20) return "불편";
    if (score < 0) return "서먹";
    if (score === 0) return "얼굴만 아는 사람";
    if (score < 10) return "아는 사람";
    if (score < 20) return "지인";
    if (score < 40) return "친구";
    if (score < 60) return "절친";
    if (score < 80) return "신뢰";
    return "소울메이트(친구)"; 
}

function getHeartHTML(score, specialStatus) {
    if (specialStatus === 'lover') return `<i class="fa-solid fa-heart heart-lover"></i><i class="fa-solid fa-heart heart-lover"></i><i class="fa-solid fa-heart heart-lover"></i>`;
    if (score === 0) return `<i class="fa-regular fa-heart heart-empty"></i>`;
    
    let html = '';
    if (score > 0) {
        const count = Math.floor(score / 20);
        const remainder = score % 20;
        for(let i=0; i<count; i++) html += `<i class="fa-solid fa-heart heart-full"></i>`;
        if(count < 5 && remainder > 10) html += `<i class="fa-solid fa-heart heart-light"></i>`;
        else if (count === 0 && remainder > 0) html += `<i class="fa-regular fa-heart heart-light"></i>`;
    } else {
        const count = Math.floor(Math.abs(score) / 20);
        for(let i=0; i<count; i++) html += `<i class="fa-solid fa-heart-crack heart-broken"></i>`;
        if (count === 0) html += `<i class="fa-solid fa-heart-crack text-slate-300"></i>`;
    }
    return html || `<i class="fa-regular fa-heart heart-empty"></i>`;
}

function updateRelationship(charId1, charId2, amount) {
    const char1 = characters.find(c => c.id === charId1);
    if (!char1.relationships[charId2]) char1.relationships[charId2] = 0;
    char1.relationships[charId2] += amount;
    if (char1.relationships[charId2] > 100) char1.relationships[charId2] = 100;
    if (char1.relationships[charId2] < -100) char1.relationships[charId2] = -100;
}

function setSpecialStatus(charId1, charId2, status) {
    const char1 = characters.find(c => c.id === charId1);
    if (!char1.specialRelations) char1.specialRelations = {};
    if (status === null) delete char1.specialRelations[charId2];
    else char1.specialRelations[charId2] = status;
}

function getProbabilisticChange(score) {
    const rand = Math.random() * 100;
    
    if (score === 5) {
        if (rand < 50) return 10;
        if (rand < 75) return 5;
        if (rand < 90) return 0;
        return -5;
    } else if (score === 4) {
        if (rand < 25) return 10;
        if (rand < 55) return 5;
        if (rand < 80) return 0;
        if (rand < 90) return -5;
        return -10;
    } else if (score === 3) {
        if (rand < 20) return 10;
        if (rand < 45) return 5;
        if (rand < 70) return 0;
        if (rand < 95) return -5;
        return -10;
    } else if (score === 2) {
        if (rand < 10) return 10;
        if (rand < 20) return 5;
        if (rand < 45) return 0;
        if (rand < 75) return -5;
        return -10;
    } else {
        if (rand < 10) return 10;
        if (rand < 25) return 5;
        if (rand < 50) return 0;
        return -5;
    }
}

function nextDay() {
    if (characters.length === 0) {
        alert("최소 1명의 캐릭터가 필요합니다.");
        return;
    }
    day++;
    const dailyLogs = [];
    
    characters.forEach(c => c.interactionGroup = null);

    characters.forEach(char => {
        const isExtrovert = char.mbti[0] === 'E';
        const chanceToGoOut = isExtrovert ? 0.6 : 0.3;
        
        if (Math.random() < chanceToGoOut) {
            const places = PLACES.filter(p => p.type === 'out');
            char.currentLocation = getRandom(places).id;
        } else {
            char.currentLocation = 'apt';
        }
    });

    const locationMap = {};
    characters.forEach(char => {
        if (!locationMap[char.currentLocation]) locationMap[char.currentLocation] = [];
        locationMap[char.currentLocation].push(char);
    });

    for (const locId in locationMap) {
        const people = locationMap[locId];
        people.sort(() => Math.random() - 0.5);

        while (people.length > 0) {
            let groupSize = 1;
            const rand = Math.random();
            if (people.length >= 4 && rand < 0.1) groupSize = 4;
            else if (people.length >= 3 && rand < 0.25) groupSize = 3;
            else if (people.length >= 2 && rand < 0.7) groupSize = 2;
            
            const potentialGroup = [];
            for(let i=0; i<groupSize; i++) {
                if(people.length > 0) potentialGroup.push(people.pop());
            }

            if (potentialGroup.length > 1) {
                let lowestRel = 100;
                for(let i=0; i<potentialGroup.length; i++) {
                    for(let j=i+1; j<potentialGroup.length; j++) {
                        const rel = potentialGroup[i].relationships[potentialGroup[j].id] || 0;
                        if (rel < lowestRel) lowestRel = rel;
                    }
                }
                
                let avoidChance = 0;
                if (lowestRel < -50) avoidChance = 0.8;
                else if (lowestRel < -20) avoidChance = 0.5;
                else if (lowestRel < 0) avoidChance = 0.2;

                if (Math.random() < avoidChance) {
                    potentialGroup.forEach(char => {
                        let uncomfortableTarget = null;
                        let minVal = 0;
                        
                        potentialGroup.forEach(peer => {
                            if (char.id === peer.id) return;
                            const rel = char.relationships[peer.id] || 0;
                            if (rel < minVal) {
                                minVal = rel;
                                uncomfortableTarget = peer;
                            }
                        });

                        let actionPool = ACTIONS.filter(a => {
                            if (locId === 'apt') return a.place === 'apt';
                            return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                        });
                        if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                        if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');

                        const action = getRandom(actionPool);
                        const processedText = fillTemplate(getRandom(action.text));
                        char.currentAction = action.name;

                        let logText = "";
                        if (uncomfortableTarget) {
                            logText = `${char.name}${getJosa(char.name, '은/는')} ${uncomfortableTarget.name}${getJosa(uncomfortableTarget.name, '이/가')} 불편해 자리를 피했다. ${getLocationName(locId)}에서 홀로 ${processedText}.`;
                        } else {
                            logText = `${char.name}${getJosa(char.name, '은/는')} 어색한 분위기를 피해 ${getLocationName(locId)}에서 홀로 ${processedText}.`;
                        }
                        
                        dailyLogs.push({ text: logText, type: 'solo' });
                    });
                    continue; 
                }
            }

            const group = potentialGroup;
            const actor = group[0];
            const groupId = Date.now() + Math.random();

            let isTravel = false;
            if (group.length >= 2) {
                let minRel = 100;
                for(let i=0; i<group.length; i++) {
                    for(let j=i+1; j<group.length; j++) {
                        const s = group[i].relationships[group[j].id] || 0;
                        if (s < minRel) minRel = s;
                    }
                }
                if (minRel >= 50 && Math.random() < 0.2) isTravel = true;
            }

            if (group.length > 1) {
                group.forEach(m => m.interactionGroup = groupId);
            }

            if (group.length === 1) {
                let actionPool = ACTIONS.filter(a => {
                    if (locId === 'apt') return a.place === 'apt';
                    return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                });
                if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');

                const action = getRandom(actionPool);
                const processedText = fillTemplate(getRandom(action.text));
                
                actor.currentAction = action.name;
                dailyLogs.push({ text: `${actor.name}${getJosa(actor.name, '은/는')} ${getLocationName(locId)}에서 ${processedText}.`, type: 'solo' });
            
            } else if (group.length === 2) {
                const target = group[1];
                
                if (Math.random() < 0.15 && !isTravel) {
                    const evt = getRandom(EVENTS);
                    const chemistryScore = calculateChemistry(actor.mbti, target.mbti);
                    const currentScore = actor.relationships[target.id] || 0;
                    const isLovers = actor.specialRelations?.[target.id] === 'lover';
                    let logText = "";

                    if (evt.type === 'reconcile') {
                        const actorHates = actor.relationships[target.id] < 0;
                        const targetHates = target.relationships[actor.id] < 0;
                        
                        if (actorHates || targetHates) {
                             updateRelationship(actor.id, target.id, 15); updateRelationship(target.id, actor.id, 15);
                             logText = `[${evt.name}] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 서로 사과하고 화해했다.`;
                             actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                             dailyLogs.push({ text: logText, type: 'event' });
                        } else {
                             updateRelationship(actor.id, target.id, 5); updateRelationship(target.id, actor.id, 5);
                             logText = `${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 사이좋게 대화를 나눴다.`;
                             actor.currentAction = "대화"; target.currentAction = "대화";
                             dailyLogs.push({ text: logText, type: 'social' });
                        }
                    } 
                    else if (evt.type === 'confess') {
                        if (isLovers) {
                            updateRelationship(actor.id, target.id, 5); updateRelationship(target.id, actor.id, 5);
                            logText = `[사랑] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 다시 사랑을 맹세했다.`;
                        } else if (currentScore > 50) {
                            const chemBonus = (chemistryScore - 3) * 0.05;
                            const successChance = 0.4 + (currentScore/200) + chemBonus;
                            if (Math.random() < successChance) {
                                setSpecialStatus(actor.id, target.id, 'lover'); setSpecialStatus(target.id, actor.id, 'lover');
                                updateRelationship(actor.id, target.id, 15); updateRelationship(target.id, actor.id, 15);
                                logText = `[고백 성공] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 고백했고, 연인이 되었다! 💖`;
                            } else {
                                updateRelationship(actor.id, target.id, -5); updateRelationship(target.id, actor.id, -2);
                                logText = `[고백 실패] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 차였다...`;
                            }
                        } else {
                            logText = `[고백 포기] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}에게 고백하려다 참았다.`;
                        }
                        actor.currentAction = evt.name; target.currentAction = `(대상) ${evt.name}`;
                        dailyLogs.push({ text: logText, type: 'event' });
                    } 
                    else if (evt.type === 'breakup') {
                        if (isLovers) {
                            if (Math.random() < 0.3 - (currentScore/200)) {
                                setSpecialStatus(actor.id, target.id, null); setSpecialStatus(target.id, actor.id, null);
                                updateRelationship(actor.id, target.id, -25); updateRelationship(target.id, actor.id, -25);
                                logText = `[이별] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 헤어졌다. 💔`;
                            } else {
                                updateRelationship(actor.id, target.id, 2);
                                logText = `[위기] ${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} 다퉜지만 헤어지지 않았다.`;
                            }
                        } else {
                            updateRelationship(actor.id, target.id, -5);
                            logText = `${actor.name}${getJosa(actor.name, '은/는')} ${target.name}${getJosa(target.name, '와/과')} 거리를 두기로 했다.`;
                        }
                        actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                        dailyLogs.push({ text: logText, type: 'event' });
                    } 
                    else {
                        let c1 = evt.change + Math.floor(Math.random()*5);
                        let c2 = evt.change + Math.floor(Math.random()*5);
                        updateRelationship(actor.id, target.id, c1);
                        updateRelationship(target.id, actor.id, c2);
                        logText = `[${evt.name}] ${actor.name}${getJosa(actor.name, '은/는')} ${target.name}${evt.text}.`;
                        actor.currentAction = evt.name; target.currentAction = `${evt.name}`;
                        dailyLogs.push({ text: logText, type: 'event' });
                    }
                } 
                else {
                    let action = null;
                    if (isTravel) {
                        action = ACTIONS.find(a => a.id === 'travel');
                        group.forEach(m => m.currentLocation = 'travel');
                    } else {
                        let actionPool = ACTIONS.filter(a => {
                            if (locId === 'apt') return a.place === 'apt';
                            return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                        });
                        if (actionPool.length === 0) actionPool = ACTIONS.filter(a => a.place === 'out');
                        if (locId === 'apt') actionPool = ACTIONS.filter(a => a.place === 'apt');
                        action = getRandom(actionPool);
                    }

                    const processedText = fillTemplate(getRandom(action.text));
                    const chemistryScore = calculateChemistry(actor.mbti, target.mbti);
                    
                    updateRelationship(actor.id, target.id, getProbabilisticChange(chemistryScore));
                    updateRelationship(target.id, actor.id, getProbabilisticChange(chemistryScore));

                    actor.currentAction = action.name;
                    target.currentAction = `함께 ${action.name}`;

                    dailyLogs.push({ text: `${actor.name}${getJosa(actor.name, '와/과')} ${target.name}${getJosa(target.name, '은/는')} ${isTravel ? '여행지' : getLocationName(locId)}에서 ${processedText} (함께함)`, type: isTravel ? 'event' : 'social' });
                }

            } else {
                let action = null;
                if (isTravel) {
                    action = ACTIONS.find(a => a.id === 'travel');
                    group.forEach(m => m.currentLocation = 'travel');
                } else {
                    let actionPool = ACTIONS.filter(a => ['eat', 'gathering', 'leisure', 'shop', 'travel'].includes(a.id));
                    actionPool = actionPool.filter(a => {
                        if (locId === 'apt') return a.place === 'apt';
                        return PLACES.find(p=>p.id === locId).name.includes(a.place) || a.place === locId || a.place === 'out';
                    });
                    if(actionPool.length === 0) actionPool = [ACTIONS[0]];
                    action = getRandom(actionPool);
                }

                const processedText = fillTemplate(getRandom(action.text));
                const names = group.map(m => m.name).join(', ');
                
                for(let i=0; i<group.length; i++) {
                    group[i].currentAction = isTravel ? action.name : `함께 ${action.name}`;
                    for(let j=0; j<group.length; j++) {
                        if(i === j) continue;
                        const chem = calculateChemistry(group[i].mbti, group[j].mbti);
                        updateRelationship(group[i].id, group[j].id, getProbabilisticChange(chem));
                    }
                }

                dailyLogs.push({ 
                    text: `${names}${getJosa(group[group.length-1].name, '은/는')} ${isTravel ? '여행지' : getLocationName(locId)}에서 ${processedText} (단체 행동)`, 
                    type: isTravel ? 'event' : 'social' 
                });
            }
        }
    }

    logs = [...dailyLogs, ...logs];
    renderLogs(dailyLogs);
    renderStatusTable();
    renderLocations();
    updateUI();
}

function getLocationName(id) {
    const p = PLACES.find(x => x.id === id);
    return p ? p.name : id;
}

function addCharacter() {
    if (characters.length >= 30) return alert("최대 30명까지만 가능합니다.");
    const nameInput = document.getElementById('input-name');
    const mbtiInput = document.getElementById('input-mbti');
    const roomInput = document.getElementById('input-room');
    const name = nameInput.value.trim();
    if (!name) return alert("이름을 입력해주세요.");
    if (characters.some(c => c.name === name)) return alert("이미 존재하는 이름입니다.");
    let room = roomInput.value;
    if (room === 'auto') {
        room = findEmptyRoom();
        if (!room) return alert("빈 방이 없습니다.");
    } else if (getRoomCount(room) >= 4) return alert("해당 방은 정원 초과입니다.");

    characters.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        name: name, mbti: mbtiInput.value, room: room,
        currentLocation: 'apt', currentAction: '-', relationships: {}, specialRelations: {}
    });
    nameInput.value = '';
    renderCharacterList(); renderLocations(); updateUI();
}

function removeCharacter(id) {
    if (!confirm("삭제하시겠습니까?")) return;
    characters = characters.filter(c => c.id !== id);
    characters.forEach(c => {
        delete c.relationships[id];
        if(c.specialRelations) delete c.specialRelations[id];
    });
    renderCharacterList(); renderLocations(); updateUI();
}

function findEmptyRoom() {
    const counts = {};
    for (let f=1; f<=5; f++) for (let r=1; r<=6; r++) counts[`${f}0${r}`] = 0;
    characters.forEach(c => { if (counts[c.room] !== undefined) counts[c.room]++; });
    const sorted = Object.keys(counts).sort((a,b) => counts[a] - counts[b]);
    return counts[sorted[0]] >= 4 ? null : sorted[0];
}

function getRoomCount(roomNum) { return characters.filter(c => c.room === roomNum).length; }

function initMbtiSelect() {
    const sel = document.getElementById('input-mbti');
    MBTI_TYPES.forEach(t => { const opt = document.createElement('option'); opt.value = t; opt.text = t; sel.appendChild(opt); });
}
function initRoomSelect() {
    const sel = document.getElementById('input-room');
    for (let f=1; f<=5; f++) for (let r=1; r<=6; r++) { const opt = document.createElement('option'); opt.value = `${f}0${r}`; opt.text = `${f}0${r}호`; sel.appendChild(opt); }
}

function renderCharacterList() {
    const container = document.getElementById('character-list');
    const emptyState = document.getElementById('empty-state');
    container.innerHTML = '';
    if (characters.length === 0) { container.classList.add('hidden'); emptyState.classList.remove('hidden'); return; }
    container.classList.remove('hidden'); emptyState.classList.add('hidden');

    characters.forEach(char => {
        const div = document.createElement('div');
        div.className = "bg-white dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm relative group hover:shadow-md transition-shadow cursor-pointer";
        if (affectionMode) {
            div.onclick = () => showAffectionModal(char.id);
            div.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg dark:text-white">${char.name}</h3>
                    <span class="text-xs bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-300 px-2 py-1 rounded-full">${char.mbti}</span>
                </div>
                <div class="text-sm text-slate-500 dark:text-slate-400 mb-2"><i class="fa-solid fa-door-closed mr-1"></i> ${char.room}호</div>
                <div class="text-center mt-2 p-2 bg-brand-50 dark:bg-slate-800 rounded-lg text-brand-600 dark:text-brand-400 text-sm font-medium">클릭하여 관계 보기</div>
            `;
        } else {
            div.innerHTML = `
                <button onclick="removeCharacter('${char.id}')" class="absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1"><i class="fa-solid fa-times"></i></button>
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-600 flex items-center justify-center text-lg"><i class="fa-regular fa-user"></i></div>
                    <div>
                        <h3 class="font-bold text-slate-900 dark:text-white leading-tight">${char.name}</h3>
                        <div class="text-xs text-slate-500 dark:text-slate-400">${char.mbti} · ${char.room}호</div>
                    </div>
                </div>
            `;
        }
        container.appendChild(div);
    });
    document.getElementById('total-count').textContent = characters.length;
}

function renderLocations() {
    const aptGrid = document.getElementById('apartment-grid');
    aptGrid.innerHTML = '';
    const renderedIds = new Set();
    
    const getGroupMembers = (char) => {
        if (!char.interactionGroup) return [char];
        return characters.filter(c => c.interactionGroup === char.interactionGroup && c.currentLocation === char.currentLocation);
    };

    for (let f=5; f>=1; f--) { 
        for (let r=1; r<=6; r++) {
            const roomNum = `${f}0${r}`;
            const occupants = characters.filter(c => c.room === roomNum && c.currentLocation === 'apt');
            const cell = document.createElement('div');
            cell.className = "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-2 min-h-[80px] flex flex-col relative";
            cell.innerHTML = `<div class="text-xs font-mono text-slate-400 mb-1 absolute top-1 right-2">${roomNum}</div>`;
            const occDiv = document.createElement('div');
            occDiv.className = "flex flex-wrap gap-1 mt-4";
            
            occupants.forEach(occ => {
                if (renderedIds.has(occ.id)) return;
                const groupMembers = getGroupMembers(occ);
                const allInApt = groupMembers.every(m => m.currentLocation === 'apt');
                
                if (groupMembers.length > 1 && allInApt) {
                     const groupSpan = document.createElement('span');
                     groupSpan.className = "inline-flex items-center gap-0.5 bg-white dark:bg-slate-600 border border-brand-200 dark:border-slate-500 rounded px-1 shadow-sm max-w-full flex-wrap";
                     let html = ``;
                     groupMembers.forEach((m, idx) => {
                         html += `<span class="text-[10px] text-brand-700 dark:text-brand-300 font-bold whitespace-nowrap">${m.name}</span>`;
                         if (idx < groupMembers.length - 1) html += `<i class="fa-solid fa-link text-[8px] text-slate-400 mx-0.5"></i>`;
                         renderedIds.add(m.id);
                     });
                     groupSpan.innerHTML = html;
                     occDiv.appendChild(groupSpan);
                } else {
                     const badge = document.createElement('span');
                     badge.className = "text-[10px] bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full";
                     badge.textContent = occ.name;
                     occDiv.appendChild(badge);
                     renderedIds.add(occ.id);
                }
            });
            cell.appendChild(occDiv);
            aptGrid.appendChild(cell);
        }
    }

    const extList = document.getElementById('external-places-list');
    extList.innerHTML = '';
    const placesToRender = PLACES.filter(p => p.type === 'out' || p.type === 'travel');

    placesToRender.forEach(place => {
        const occupants = characters.filter(c => c.currentLocation === place.id);
        const row = document.createElement('div');
        row.className = `p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-600 flex items-start gap-3 ${place.id === 'travel' ? 'border-l-4 border-l-purple-400' : ''}`;
        
        let icon = 'fa-building';
        if (place.id === 'mart') icon = 'fa-cart-shopping';
        if (place.id === 'cafe') icon = 'fa-mug-hot';
        if (place.id === 'school') icon = 'fa-graduation-cap';
        if (place.id === 'restaurant') icon = 'fa-utensils';
        if (place.id === 'travel') icon = 'fa-plane-departure text-purple-500';
        
        let html = `
            <div class="w-10 h-10 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-slate-400 shadow-sm flex-none">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="flex-1">
                <div class="font-medium text-sm mb-1">${place.name}</div>
                <div class="flex flex-wrap gap-1">
        `;
        
        if (occupants.length === 0) {
            html += `<span class="text-xs text-slate-400">-</span>`;
        } else {
            const extRenderedIds = new Set();
            occupants.forEach(occ => {
                 if (extRenderedIds.has(occ.id)) return;
                 const groupMembers = getGroupMembers(occ);

                 if (groupMembers.length > 1) {
                     html += `<span class="inline-flex items-center gap-0.5 bg-white dark:bg-slate-600 border border-yellow-300 dark:border-yellow-700 rounded px-1 shadow-sm flex-wrap">`;
                     groupMembers.forEach((m, idx) => {
                         html += `<span class="text-[10px] text-yellow-800 dark:text-yellow-200 font-bold whitespace-nowrap">${m.name}</span>`;
                         if (idx < groupMembers.length - 1) html += `<i class="fa-solid fa-link text-[8px] text-slate-400 mx-0.5"></i>`;
                         extRenderedIds.add(m.id);
                     });
                     html += `</span>`;
                 } else {
                     html += `<span class="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full">${occ.name}</span>`;
                     extRenderedIds.add(occ.id);
                 }
            });
        }
        html += `</div></div>`;
        row.innerHTML = html;
        extList.appendChild(row);
    });
}

function renderStatusTable() {
    const tbody = document.getElementById('status-table-body');
    tbody.innerHTML = '';
    characters.forEach(char => {
        const tr = document.createElement('tr');
        const locName = getLocationName(char.currentLocation);
        tr.innerHTML = `<td class="px-4 py-3 font-medium text-slate-900 dark:text-white">${char.name}</td><td class="px-4 py-3 text-slate-500 dark:text-slate-400">${locName}</td><td class="px-4 py-3 text-slate-500 dark:text-slate-400">${char.currentAction || '-'}</td>`;
        tbody.appendChild(tr);
    });
    document.getElementById('day-badge').textContent = `${day}일차`;
}

function renderLogs(newLogs) {
    const container = document.getElementById('log-container');
    if (container.querySelector('.italic')) container.innerHTML = '';
    const dayDiv = document.createElement('div');
    dayDiv.className = "mb-6 animate-[fadeIn_0.5s_ease-out]";
    dayDiv.innerHTML = `<div class="flex items-center gap-2 mb-3"><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div><span class="text-xs font-bold text-slate-400 uppercase tracking-wider">${day}일차</span><div class="h-px bg-slate-300 dark:bg-slate-600 flex-1"></div></div>`;
    newLogs.forEach(log => {
        const p = document.createElement('div');
        let styleClass = "text-slate-600 dark:text-slate-300 border-l-2 border-slate-300 pl-3 py-1";
        if (log.type === 'event') styleClass = "text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/30 border-l-4 border-brand-500 pl-3 py-2 rounded-r-lg font-medium";
        if (log.type === 'social') styleClass = "text-slate-700 dark:text-slate-200 border-l-2 border-yellow-400 pl-3 py-1 bg-yellow-50/50 dark:bg-transparent";
        p.className = `mb-2 text-sm ${styleClass}`;
        p.textContent = log.text;
        dayDiv.appendChild(p);
    });
    container.insertBefore(dayDiv, container.firstChild);
}
function clearLogs() { document.getElementById('log-container').innerHTML = `<div class="text-center text-slate-400 italic py-10">로그가 초기화되었습니다.</div>`; logs = []; }

function toggleExportMenu(event) { event.stopPropagation(); document.getElementById('export-menu').classList.toggle('hidden'); }
function closeMenus(event) { const menu = document.getElementById('export-menu'); if (!menu.classList.contains('hidden')) menu.classList.add('hidden'); }
function toggleAffectionMode() {
    affectionMode = !affectionMode;
    const btn = document.getElementById('btn-affection-mode');
    if (affectionMode) btn.className = "bg-brand-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-inner";
    else btn.className = "border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 px-3 py-2 rounded-lg text-sm font-medium hover:bg-brand-50 dark:hover:bg-slate-800 transition-colors";
    renderCharacterList();
}
function showAffectionModal(charId) {
    const char = characters.find(c => c.id === charId);
    const content = document.getElementById('modal-content');
    document.getElementById('modal-char-name').textContent = char.name;
    content.innerHTML = '';
    const list = document.createElement('div');
    list.className = "divide-y divide-slate-100 dark:divide-slate-700";
    const rels = Object.entries(char.relationships).map(([id, score]) => ({ id, score, name: characters.find(c=>c.id===id)?.name, specialStatus: char.specialRelations?.[id] })).filter(x => x.name).sort((a,b) => b.score - a.score);
    if (rels.length === 0) content.innerHTML = '<div class="p-8 text-center text-slate-400">아직 관계가 형성되지 않았습니다.</div>';
    else {
        rels.forEach(rel => {
            const row = document.createElement('div');
            row.className = "p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors";
            row.innerHTML = `<div class="flex items-center gap-3"><span class="font-medium dark:text-slate-200">${rel.name}</span><span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300">${getRelationshipLabel(rel.score, rel.specialStatus)}</span></div><div class="flex flex-col items-end"><div class="text-sm gap-1 flex">${getHeartHTML(rel.score, rel.specialStatus)}</div><span class="text-xs text-slate-400 font-mono mt-1">${rel.score}</span></div>`;
            list.appendChild(row);
        });
        content.appendChild(list);
    }
    document.getElementById('affection-modal').classList.remove('hidden');
}
function closeModal() { document.getElementById('affection-modal').classList.add('hidden'); }

function exportData(includeRelationships) {
    if (characters.length === 0) return alert("저장할 데이터가 없습니다.");
    const exportData = characters.map(c => {
        const base = { name: c.name, mbti: c.mbti, room: c.room };
        if (includeRelationships) {
            base.id = c.id; base.relationships = c.relationships; base.specialRelations = c.specialRelations; base.currentLocation = c.currentLocation; base.currentAction = c.currentAction;
        }
        return base;
    });
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ version: 1.5, type: includeRelationships ? 'full' : 'basic', day: includeRelationships ? day : 1, data: exportData }));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `housing_sim_${includeRelationships ? 'full' : 'basic'}_${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = JSON.parse(e.target.result);
            if (!json.data || !Array.isArray(json.data)) throw new Error("잘못된 파일 형식");
            if (confirm("현재 명단이 덮어씌워집니다. 진행하시겠습니까?")) {
                day = json.day || 1;
                characters = json.data.map(d => ({
                    id: d.id || Date.now().toString() + Math.random().toString(36).substr(2, 5),
                    name: d.name, mbti: d.mbti, room: d.room,
                    currentLocation: d.currentLocation || 'apt', currentAction: d.currentAction || '-',
                    relationships: d.relationships || {}, specialRelations: d.specialRelations || {}
                }));
                renderCharacterList(); renderLocations(); renderStatusTable(); clearLogs();
                document.getElementById('total-count').textContent = characters.length;
                alert("성공적으로 불러왔습니다.");
            }
        } catch (err) { alert("파일 불러오기 실패: " + err.message); }
    };
    reader.readAsText(file); input.value = '';
}

function resetAll() {
    if(confirm("모든 데이터를 초기화하시겠습니까?")) {
        characters = []; day = 1; logs = [];
        renderCharacterList(); renderLocations(); renderStatusTable(); clearLogs();
        document.getElementById('total-count').textContent = 0;
    }
}

function switchTab(tabId) {
    document.getElementById('roster-view').classList.add('hidden');
    document.getElementById('location-view').classList.add('hidden');
    document.getElementById('execution-view').classList.add('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-brand-600', 'dark:text-brand-300');
        btn.classList.add('text-slate-600', 'dark:text-slate-300');
    });
    document.getElementById(`${tabId}-view`).classList.remove('hidden');
    const btn = document.getElementById(`btn-${tabId}`);
    btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200');
    btn.classList.add('bg-white', 'dark:bg-slate-600', 'shadow-sm', 'text-brand-600', 'dark:text-brand-300');
    if (tabId === 'execution') renderStatusTable();
    if (tabId === 'location') renderLocations();
}

function updateUI() { renderCharacterList(); renderStatusTable(); }

function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
    else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
}
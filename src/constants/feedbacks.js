import { text } from "./text";

export const feedbacks = [
    {
        id: 1,
        title: '모요 1개월 피드백',
        startDate: '2022.3.28',
        endDate: '2022.4.11',
        path: '/moyo1month',
        contents: [
            {
                id: 1,
                type: 'start',
                title: '안녕하세요.',
                discription: `개인 성장을 위해 피드백을 요청드립니다.
                항목이 많더라도 시간내어 작성해주시면 많은 도움이 될거에요.

                되도록 강한 칭찬과 강한 비판을 부탁드립니다!`,
            },
            {
                id: 2,
                type: 'short',
                required: true,
                name: 'name',
                title: '이름을 알려주세요.',
            },
            {
                id: 3,
                type: 'long',
                required: true,
                name: 'role',
                title: '이동국에게 디자이너로서 기대하는 역할은 무엇인가요?',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 4,
                type: 'choice',
                required: true,
                name: 'role_score',
                title: '방금 작성한 역할을 얼만큼 실천하고 있나요?',
                options: text.fiveLevel,
            },
            {
                id: 5,
                type: 'long',
                required: true,
                name: 'keep',
                title: '이동국의 강점은 무엇인가요?',
                discription: '앞으로 계속 키워나갔으면 하는 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 6,
                type: 'long',
                required: true,
                name: 'problem',
                title: '이동국의 보완할 점은 무엇인가요?',
                discription: '앞으로 개선했으면 하는 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 7,
                type: 'long',
                required: true,
                name: 'try',
                title: '다음에 새롭게 도전했으면 하는 점이 무엇인가요?',
                discription: '저에게 기대했지만 아직 보지못한 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 8,
                type: 'choice',
                name: 'feedback_score',
                title: '피드백에 대한 피드백이에요.',
                discription: '피드백을 작성할 때의 경험을 점수로 알려주세요.',
                options: text.score,
            },
            {
                id: 9,
                type: 'long',
                name: 'feedback_score_reason',
                title: '위 점수의 이유를 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 10,
                type: 'email',
                required: true,
                name: 'email',
                title: '모든 질문이 끝났어요.',
                discription: '작성한 피드백을 조회할 수 있는 링크를 이메일로 보내드릴게요.',
                placeholder: '이메일',
            },
            {
                id: 11,
                type: 'end',
                title: '감사합니다.',
                discription: '빠른 시일 안에 피드백에 대한 답변을 드릴게요.',
            },
        ]
    },
    {
        id: 2,
        title: '모요 3개월 피드백',
        startDate: '2022.5.20',
        endDate: '2022.5.30',
        path: '/moyo3month',
        contents: [
            {
                id: 1,
                type: 'start',
                title: '안녕하세요.',
                discription: `벌써 모요에 합류한지 3개월이 지났습니다 :)
                지난번과 마찬가지로 개인적인 성장을 위해 피드백을 요청드려요.

                되도록 강한 칭찬과 강한 비판을 부탁드립니다!`,
            },
            {
                id: 2,
                type: 'short',
                required: true,
                name: 'name',
                title: '이름을 알려주세요.',
                discription: '익명이라고 적어주셔도 괜찮아요.',
            },
            {
                id: 3,
                type: 'long',
                required: true,
                name: 'role',
                title: '이동국에게 디자이너 또는 PO로서 기대하는 역할은 무엇인가요?',
                discription: '고객 덕후분들은 둘 다 적어주세요 ^^',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                id: 4,
                type: 'choice',
                required: true,
                name: 'good_value',
                title: '핵심가치 중 제일 잘 하고 있는 한 가지는 무엇인가요?',
                discription: '잘 하는걸 더 잘할 수 있게 도와주세요!',
                options: text.coreValue,
            },
            {
                id: 5,
                type: 'long',
                required: true,
                name: 'good_reason',
                title: '그렇게 생각한 이유를 알려주세요.',
                placeholder: '한 가지 사례를 들어주시면 도움이 돼요.',
            },
            {
                id: 6,
                type: 'choice',
                required: true,
                name: 'potential_value',
                title: '반대로 제가 더 보여줬으면 하는 한 가지는 무엇인가요?',
                discription: '부족한 역량에 대한 평가가 아닌 더 성장할 수 있는 잠재력이 있는 부분이 궁금해요!',
                options: text.coreValue,
            },
            {
                id: 7,
                type: 'long',
                required: true,
                name: 'potential_reason',
                title: '그렇게 생각한 이유를 알려주세요.',
                placeholder: '한 가지 사례를 들어주시면 도움이 돼요.',
            },
            {
                id: 8,
                type: 'long',
                name: 'feedback_feedback',
                title: '지금까지 피드백을 작성하는 경험은 어땠나요?',
                placeholder: '불편한 점이나 개선이 필요한 점을 알려주세요',
            },
            {
                id: 9,
                type: 'email',
                required: true,
                name: 'email',
                title: '모든 질문이 끝났어요.',
                discription: '작성한 피드백을 조회할 수 있는 링크를 이메일로 보내드릴게요.',
                placeholder: '이메일',
            },
            {
                id: 10,
                type: 'end',
                title: '감사합니다.',
                discription: '빠른 시일 안에 1on1을 잡아 피드백에 대한 답변을 드릴게요.',
            },
        ]
    },
]
import { text } from "./text";

export const feedbacks = [
    {
        id: 1,
        title: '모요 3월 피드백',
        startDate: '2022.3.28',
        endDate: '2022.4.11',
        path: '/moyo1month',
        contents: [
            {
                type: 'start',
                title: '안녕하세요.',
                discription: `개인 성장을 위해 피드백을 요청드립니다.
                항목이 많더라도 시간내어 작성해주시면 많은 도움이 될거에요.

                되도록 강한 칭찬과 강한 비판을 부탁드립니다!`,
            },
            {
                type: 'short',
                required: true,
                name: 'name',
                title: '이름을 알려주세요.',
            },
            {
                type: 'long',
                required: true,
                name: 'role',
                title: '이동국에게 기대하는 디자이너로서의 역할은 무엇인가요?',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                type: 'choice',
                required: true,
                name: 'role_score',
                title: '방금 작성한 역할을 얼만큼 실천하고 있나요?',
                options: text.fiveLevel,
            },
            {
                type: 'long',
                required: true,
                name: 'keep',
                title: '이동국의 강점은 무엇인가요?',
                discription: '앞으로 계속 키워나갔으면 하는 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                type: 'long',
                required: true,
                name: 'problem',
                title: '이동국의 보완할 점은 무엇인가요?',
                discription: '앞으로 개선했으면 하는 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                type: 'long',
                required: true,
                name: 'try',
                title: '다음에 새롭게 도전했으면 하는 점이 무엇인가요?',
                discription: '저에게 기대했지만 아직 보지못한 부분을 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                type: 'choice',
                name: 'feedback_score',
                title: '피드백에 대한 피드백이에요.',
                discription: '피드백을 작성할 때의 경험을 점수로 알려주세요.',
                options: text.score,
            },
            {
                type: 'long',
                name: 'feedback_score_reason',
                title: '위 점수의 이유를 알려주세요.',
                placeholder: '자유롭게 적어주세요.',
            },
            {
                type: 'email',
                required: true,
                name: 'email',
                title: '모든 질문이 끝났어요.',
                discription: '작성한 피드백을 조회할 수 있는 링크를 이메일로 보내드릴게요.',
                placeholder: '이메일',
            },
            {
                type: 'end',
                title: '감사합니다.',
                discription: '빠른 시일 안에 피드백에 대한 답변을 드릴게요.',
            },
        ]
    },
]
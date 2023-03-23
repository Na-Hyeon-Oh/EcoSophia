import { MethodType } from '../assets/enums/MethodType';

export const testData = [
    {
        date: new Date("2023-02-14"),
        by: "우리은행/우리SumCheck카드",
        contents: "TwoSomePlace 성균관대점",
        price: -14500,
        tags: [
            {
                id: 2,
                name: "카페/디저트"
            },
        ]
    },
    {
        date: new Date(),
        by: "현금",
        contents: "월급",
        price: 1956400,
        tags: [
        ]
    },
    {
        date: new Date(),
        by: "현금",
        contents: "OutDak 율전점",
        price: -25500,
        tags: [
            {
                id: 1,
                name: "식비"
            }
        ]
    },
]

export const methodList = [
    {
        id: 0,
        userId: 1,
        type: MethodType.Cash,
        name: "현금"
    },
    {
        id: 1,
        userId: 1,
        type: MethodType.Card,
        name: "우리은행/우리SumCheck카드"
    },
];

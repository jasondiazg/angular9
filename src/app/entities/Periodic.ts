export interface Periodic {
    id: number;
    name: string;
    position: number;
    weight: number;
    symbol: string;
    created: string;
}

export const Utils = {
    todayAsString: () => {
        const today = new Date();
        const month = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
        return `${today.getFullYear()}-${month}-${today.getDate()}`;
    }
}

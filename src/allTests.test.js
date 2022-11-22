import {
    sum,
    decrease,
    removeUnderline,
    extractHoursFromSeconds,
    calcNightlyFactor,
    removeNightlyFactor,
    sumHoursAndMinutes,
    decreaseHoursAndMinutes
} from "./helper/calculator";

describe("Utils", () => {
    it('Sum multiples inputs', () => {
        expect(sumHoursAndMinutes({hours: [1,2], minutes: [0,0]})).toStrictEqual({ hours: 3, minutes: 0 });
        expect(sumHoursAndMinutes({hours: [5,2], minutes: [10,15]})).toStrictEqual({ hours: 7, minutes: 25 });
        expect(sumHoursAndMinutes({hours: [1,1], minutes: [59,1]})).toStrictEqual({ hours: 3, minutes: 0 });
    })
    it('Decrease multiples inputs', () => {
        expect(decreaseHoursAndMinutes({hours: [1,1], minutes: [20,10]})).toStrictEqual({ hours: 0, minutes: 10 });
        expect(decreaseHoursAndMinutes({hours: [5,2], minutes: [10,15]})).toStrictEqual({ hours: 2, minutes: 55 });
        expect(decreaseHoursAndMinutes({hours: [4,2], minutes: [59,10]})).toStrictEqual({ hours: 2, minutes: 49 });
    })
    it("Sum", () => {
        expect(sum({ hour1: "01", hour2: "01", minute1: "05", minute2: "05" })).toStrictEqual({ hours: 2, minutes: 10 });
        expect(sum({ hour1: "03", hour2: "01", minute1: "30", minute2: "15" })).toStrictEqual({ hours: 4, minutes: 45 });
    });
    it("Decrease", () => {
        expect(decrease({ hour1: "01", hour2: "00", minute1: "05", minute2: "55" })).toStrictEqual({ hours: 0, minutes: 10 });
    });
    it("RemoveUnderline: '__:05' ", () => {
        expect(removeUnderline("__:05")).toStrictEqual("00:05");
    });
    it("extractHoursFromSeconds", () => {
        expect(extractHoursFromSeconds(4680)).toStrictEqual(1);
        expect(extractHoursFromSeconds(9360)).toStrictEqual(2);
        expect(extractHoursFromSeconds(3600)).toStrictEqual(1);
    });

    it("calcNightlyFactor", () => {
        expect(calcNightlyFactor({ hours: 1, minutes: 0 })).toStrictEqual({ hours: 1, minutes: 8 });
    });

    it("removeNightlyFactor", () => {
        expect(removeNightlyFactor({ hours: 1, minutes: 8 })).toStrictEqual({ hours: 1, minutes: 0 });
    });
});

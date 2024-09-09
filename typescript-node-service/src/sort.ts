import { Stack } from "./Stack";

const BULKY_THRESHOLD_VOLUME_CUBIC_CM = 1e6;
const BULKY_DIMENSION_THRESHOLD_CM = 150;
const HEAVY_THRESHOLD_KG = 20;

export const sort = (widthCm: number, heightCm: number, lengthCm: number, massKg: number): Stack => {
    const volumeCubicCm: number = widthCm * heightCm * lengthCm;
    const isHeavy: boolean = massKg >= HEAVY_THRESHOLD_KG;

    const isBulkyVolume: boolean = volumeCubicCm >= BULKY_THRESHOLD_VOLUME_CUBIC_CM;
    const isBulkyDimension: boolean =
        widthCm >= BULKY_DIMENSION_THRESHOLD_CM || heightCm >= BULKY_DIMENSION_THRESHOLD_CM || lengthCm >= BULKY_DIMENSION_THRESHOLD_CM;

    const isBulky = isBulkyVolume || isBulkyDimension;

    const isRejected: boolean = isBulky && isHeavy;
    if (isRejected) {
        return Stack.Rejected;
    }
    const isSpecial: boolean = isBulky || isHeavy;
    if (isSpecial) {
        return Stack.Special;
    }
    return Stack.Standard;
};

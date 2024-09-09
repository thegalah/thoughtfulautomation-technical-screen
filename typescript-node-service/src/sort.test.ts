import { sort } from "./sort";
import { Stack } from "./Stack";

describe("Package Sorting Function", () => {
    test("should return Stack.Standard for a package that is neither bulky nor heavy", () => {
        const result = sort(50, 50, 50, 10); // Volume = 125000 cm³, mass = 10 kg
        expect(result).toBe(Stack.Standard);
    });

    test("should return Stack.Special for a package that is bulky but not heavy", () => {
        const result = sort(200, 100, 50, 10); // Volume = 1,000,000 cm³, mass = 10 kg
        expect(result).toBe(Stack.Special);
    });

    test("should return Stack.Special for a package that is heavy but not bulky", () => {
        const result = sort(50, 50, 50, 25); // Volume = 125000 cm³, mass = 25 kg
        expect(result).toBe(Stack.Special);
    });

    test("should return Stack.Rejected for a package that is both bulky and heavy", () => {
        const result = sort(200, 100, 50, 25); // Volume = 1,000,000 cm³, mass = 25 kg
        expect(result).toBe(Stack.Rejected);
    });

    test("should return Stack.Special for a package with one dimension greater than or equal to the bulky threshold", () => {
        const result = sort(150, 50, 50, 10); // One dimension = 150 cm, mass = 10 kg
        expect(result).toBe(Stack.Special);
    });

    test("should return Stack.Rejected for a package with one dimension greater than or equal to the bulky threshold and mass equal or greater than heavy threshold", () => {
        const result = sort(150, 50, 50, 20); // One dimension = 150 cm, mass = 20 kg
        expect(result).toBe(Stack.Rejected);
    });

    test("should return Stack.Special for a package with volume exactly equal to bulky threshold and mass less than heavy threshold", () => {
        const result = sort(100, 100, 100, 10); // Volume = 1,000,000 cm³, mass = 10 kg
        expect(result).toBe(Stack.Special);
    });

    test("should return Stack.Rejected for a package with volume exactly equal to bulky threshold and mass equal to heavy threshold", () => {
        const result = sort(100, 100, 100, 20); // Volume = 1,000,000 cm³, mass = 20 kg
        expect(result).toBe(Stack.Rejected);
    });
});

import StringUtils from "./StringUtils";

test('Test getting initials from a name', () => {
    expect(StringUtils.getNameInitials("João Silva")).toBe("JS");
});

test('Test limiting initials from a name to 2 digits', () => {
    expect(StringUtils.getNameInitials("João Silva de Oliveira Neto")).toBe("JS");
});

test('Validate a valid URL', () => {
    expect(StringUtils.validateUrl("http://www.venturus.org.br/")).toBe(true);
});

test('Validate a https URL', () => {
    expect(StringUtils.validateUrl("https://www.venturus.org.br/")).toBe(true);
});

test('Validate a URL without www', () => {
    expect(StringUtils.validateUrl("https://venturus.org.br/")).toBe(true);
});

test('Invalidate a url without https', () => {
    expect(StringUtils.validateUrl("venturus.org.br/")).toBe(false);
});

test('Invalidate a incorrect url', () => {
    expect(StringUtils.validateUrl("venturus")).toBe(false);
});
import StringUtils from "./StringUtils";

test('get initials from name', () => {
    expect(StringUtils.getNameInitials("João Silva de Oliveira Neto")).toBe("JS");
});

test('Validate url', () => {
    expect(StringUtils.validateUrl("http://www.venturus.org.br/")).toBe(true);
    expect(StringUtils.validateUrl("https://www.venturus.org.br/")).toBe(true);
    expect(StringUtils.validateUrl("https://venturus.org.br/")).toBe(true);
});

test('Invalidate a wrong url', () => {
    expect(StringUtils.validateUrl("venturus.org.br/")).toBe(false);
    expect(StringUtils.validateUrl("venturus")).toBe(false);
});

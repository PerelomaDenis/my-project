type Mode = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mode = {}, additional: string[] = []) => {
    const classes = [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([, condition]) => Boolean(condition)).map(([cls]) => cls)
    ]

    return classes.join(' ').trim();
}
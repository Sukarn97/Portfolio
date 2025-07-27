export interface Words {
    text: string;
    imgPath: string;
}

export interface NavLink {
    name: string;
    link: string;
}

export interface CounterItem {
    value: number;
    suffix: string;
    label: string;
}

export interface LogoIcon {
    imgPath: string;
}

export interface Abilities {
    title: string;
    imgPath: string;
    desc: string;
}

export interface TechStackImg {
    imgPath: string;
    name: string;
}

export interface TechStackIcons {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number];
}

export interface ExpCards {
    review: string;
    imgPath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

export interface ExpLogo {
    name: string;
    imgPath: string;
}

export interface Testimonials {
    name: string;
    imgPath: string;
    review: string;
    mentions: string;
}

export interface SocialImgs {
    imgPath: string;
    name: string;
}
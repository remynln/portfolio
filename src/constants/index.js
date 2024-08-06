import * as indexen from './indexen'
import * as indexfr from './indexfr'

let navLinks = indexen.navLinks;
let services = indexen.services;
let technologies = indexen.technologies;
let experiences = indexen.experiences;
let testimonials = indexen.testimonials;
let projects = indexen.projects;
let about_title = indexen.about_title;
let experience_title = indexen.experience_title;
let work_title = indexen.work_title;
let contact_title = indexen.contact_title;
let socials_title = indexen.socials_title;
let introduction_title = indexen.introduction_title;


const initLanguage = () => {
    localStorage.setItem('lang', 'en');
}

const getLanguage = () => {
    const lang = localStorage.getItem('lang');
    if (!lang) {
        initLanguage();
        return localStorage.getItem('lang');
    }
    return lang;
}

const setLanguage = (lang) => {
    if (lang === 'fr') {
        navLinks = indexfr.navLinks;
        services = indexfr.services;
        technologies = indexfr.technologies;
        experiences = indexfr.experiences;
        testimonials = indexfr.testimonials;
        projects = indexfr.projects;
        about_title = indexfr.about_title;
        experience_title = indexfr.experience_title;
        work_title = indexfr.work_title;
        contact_title = indexfr.contact_title;
        socials_title = indexfr.socials_title;
        introduction_title = indexfr.introduction_title;
        localStorage.setItem('lang', 'fr');
    }
    if (lang === 'en') {
        navLinks = indexen.navLinks;
        services = indexen.services;
        technologies = indexen.technologies;
        experiences = indexen.experiences;
        testimonials = indexen.testimonials;
        projects = indexen.projects;
        about_title = indexen.about_title;
        experience_title = indexen.experience_title;
        work_title = indexen.work_title;
        contact_title = indexen.contact_title;
        socials_title = indexen.socials_title;
        introduction_title = indexen.introduction_title;
        localStorage.setItem('lang', 'en');
    }
    window.location.reload();
}

export { navLinks, services, technologies, experiences, testimonials, projects, about_title, experience_title, work_title, contact_title, socials_title, introduction_title, setLanguage, initLanguage, getLanguage };
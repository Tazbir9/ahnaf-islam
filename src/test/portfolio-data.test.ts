import { describe, expect, it } from 'vitest';
import { contactDetails, currentSkills, learningSkills, projects, whatsappUrl } from '@/lib/portfolio-data';

describe('Honest portfolio facts', () => {
  it.each(['TypeScript', 'Mongoose', 'Node.js', 'Next.js', 'Express.js', 'MongoDB'])('lists %s only as currently learning', name => {
    expect(learningSkills).toContain(name);
    expect(currentSkills.map(skill => skill.name)).not.toContain(name);
  });
  it('does not invent contact information', () => {
    expect(Object.values(contactDetails)).toEqual([null, null, null, null, null]);
  });
  it('activates WhatsApp only for a valid supplied phone number', () => {
    expect(whatsappUrl(null)).toBeNull();
    expect(whatsappUrl('placeholder')).toBeNull();
    expect(whatsappUrl('+1 (202) 555-0123')).toBe('https://wa.me/12025550123');
  });
  it('keeps React outside the current skills list while it is being learned', () => {
    expect(currentSkills.some(skill => /react/i.test(skill.name))).toBe(false);
  });
  it('keeps the unfinished Weather App in progress and does not invent a demo', () => {
    const weather = projects.find(project => project.name === 'Weather App');
    expect(weather?.status).toBe('In progress');
    expect(weather?.url).toBeNull();
  });
  it('links Ahnaf Movies to the supplied real demo', () => {
    expect(projects.find(project => project.name === 'Ahnaf Movies')?.url).toBe('https://ahnaf-movies.netlify.app/');
  });
  it('links Payoo to the supplied real demo', () => {
    expect(projects.find(project => project.name === 'Payoo')?.url).toBe('https://payoo-ahnaf.netlify.app/');
  });
});
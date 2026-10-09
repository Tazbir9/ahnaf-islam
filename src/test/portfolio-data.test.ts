import { describe, expect, it } from 'vitest';
import { currentSkills, projects } from '@/lib/portfolio-data';

describe('Honest portfolio facts', () => {
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
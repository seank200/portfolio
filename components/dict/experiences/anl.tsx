import { createIntlDict } from '@/i18n';

export const anlDict = createIntlDict(
  {
    TITLE: 'Postbachelorette Appointee',
    DIVISION: 'Mathematics and Computer Science Division',
    AFFILIATION: 'Argonne National Laboratory',
    CATEGORY: 'Work Experience',
    LOCATION: 'Lemont, IL, USA 🇺🇸',
    DETAILS: [
      'Developed optimized algorithm for processing raw brain diffusion MRI scan data for brain connectivity analysis using MATLAB and C++.',
      'Collaborated with team that created Nek5000 and NekRS, a highly-scalable open source library popular for efficiently solving Navier-Stokes equations for incompressible fluid flow',
      'Contributed to shared team-wide repository using Git best-practice workflows (branching, merging, PRs)',
      'Worked together with supervisors/teammates from various educational and cultural backgrounds, with daily lab meetings for progress reports and future planning',
    ],
  },
  {
    TITLE: '연구원',
    CATEGORY: '인턴',
    LOCATION: '미국 일리노이 주',
  }
);

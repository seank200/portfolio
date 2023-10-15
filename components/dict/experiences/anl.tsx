import { createIntlDict } from '@/i18n';

const tagStyle = 'px-1 text-secondary text-sm font-semibold';

export const anlDict = createIntlDict(
  {
    TITLE: 'Postbachelorette Appointee',
    DIVISION: 'Mathematics and Computer Science Division',
    AFFILIATION: 'Argonne National Laboratory',
    CATEGORY: 'Work Experience',
    LOCATION: 'Lemont, IL, USA 🇺🇸',
    DETAILS: [
      <>
        <span className="font-bold">[Reserach] </span>
        Developed an algorithm for processing raw brain diffusion MRI scan data
        for brain white matter tractography. Implemented parallel processing
        capabilities on certain functions using MPI, and tested them on large
        clustered systems with distributed memory. Increased algorithm accuracy
        by 15%, and improved execution time up to 40% compared to serial
        processing.
        <span className={tagStyle}>#c++</span>
        <span className={tagStyle}>#mpi</span>
      </>,
      <>
        <span className="font-bold">[Collaboration] </span>
        Participated in daily lab meetings for progress reports and future
        planning. Visualized test results using MATLAB to plot accuracy and
        execution times. Shared insights on algorithm optimization techniques to
        improve execution times (e.g. quasi-Newton methods for gradient descent
        problems). <span className={tagStyle}>#matlab</span>
      </>,
      <>
        <span className="font-bold">[Teamwork] </span>
        Worked closely and formed close relationships with supervisors,
        researchers, and students from various cultural/educational backgrounds
        (U.S., Canada, India, Taiwan, Greece, etc.). In addition to daily lab
        meetings, participated in after-hours study sessions with fellow interns
        every weekend for studying related theories and research papers.
      </>,
      // 'Contributed to shared team-wide repository using Git best-practice workflows (branching, merging, PRs)',
    ],
  },
  {
    TITLE: '인턴 연구원',
    CATEGORY: '인턴',
    AFFILIATION: '아르곤 국립 연구소 (Argonne National Laboratory)',
    LOCATION: '미국 일리노이 주 🇺🇸',
    DETAILS: [
      <>
        <span className="font-bold">[연구내용] </span>
        뇌영상 처리 알고리즘을 대규모 클러스터 서버에서 효율적으로 병렬처리될 수
        있도록 최적화 및 정확도 향상 연구
        <span className={tagStyle}>#matlab</span>
        <span className={tagStyle}>#c++</span>
        <span className={tagStyle}>#mpi</span>
      </>,
    ],
  }
);

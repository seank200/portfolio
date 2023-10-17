import { createIntlDict } from '@/i18n';

const tagStyle = 'px-1 inline-block text-secondary text-sm font-semibold';

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
        (U.S., Canada, India, Taiwan, Italy, Greece, UK, S. Korea etc.). In
        addition to daily lab meetings, participated in after-hours study
        sessions with fellow interns every weekend for studying related theories
        and research papers.
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
        <span className="font-bold">[연구내용] </span>뇌 확산 MRI 영상 데이터
        분석 알고리즘을 구현 및 최적화하였음. MPI를 통해 병렬 처리 가능하도록
        알고리즘을 설계하였고, 분산 메모리 구조를 가진 대규모 클러스터 서버에서
        성능 테스트를 진행함. 알고리즘 정확도를 약 15% 향상시켰고, 병렬 처리
        구현을 통해 실행 시간을 순차(serial) 처리 대비 최대 40%까지 단축하였음.
        <span className={tagStyle}>#c++</span>
        <span className={tagStyle}>#mpi</span>
      </>,
      <>
        <span className="font-bold">[협업] </span>
        일일 연구실 전체 회의에 참여하여 연구 진행사항을 보고하고 알고리즘
        최적화 방안 등에 대해 논의하였음. MATLAB을 사용하여 알고리즘 정확도,
        코어 수 별 실행시간 등 테스트 결과를 시각화하여 문제 분석 및 개선 방안
        논의가 용이하도록 하였음. 효율적 MPI 메세징 관리와 Quasi-Newton Method를
        사용한 경사하강법 최적화 등 다양한 코드 효율성 개선 방안에 대한 의견을
        공유를 통해 알고리즘 정확도를 향상시키고 실행시간을 단축하였음.
        <span className={tagStyle}>#matlab</span>
      </>,
      <>
        <span className="font-bold">[소통,노력] </span>
        다양한 국가 출신(미국, 캐나다, 인도, 태국, 이탈리아, 영국, 그리스,
        한국)의 교수진, 연구원, 학생들과 함께 협업하고 긴밀한 관계를 맺음. 일일
        연구실 회의에 더불어 매주 주말 동료 학생 및 인턴들과 함께 근무 외 시간을
        활용하여 논문 및 기반 이론 스터디를 진행함.
      </>,
    ],
  }
);

import { createIntlDict } from '@/i18n';

const tagStyle = 'px-1 inline-block text-secondary text-sm font-semibold';

export const ucnDict = createIntlDict(
  {
    TITLE: 'Research Assistant',
    DIVISION: 'Underwood Computational Neuroscience Laboratory',
    AFFILIATION:
      'Institute of Human Complexity and Systems Science (HCSS), Yonsei University',
    LOCATION: 'Seoul, South Korea 🇰🇷',
    CATEGORY: 'Work Experience',
    DETAILS: [
      <>
        <span className="font-bold">[Research] </span>Developed an image data
        preprocessor for diffusion MRI scans (DICOM, NIfTI), which included
        algorithms to approximate diffusion tensors for each MRI voxel using
        Least-Squares Fit and Gradient Descent methods. Contributed in
        development of high-order solvers for human brain white matter
        deterministic tractography.
        <span className={tagStyle}>#c++</span>
        <span className={tagStyle}>#matlab</span>
        <span className={tagStyle}>#python</span>
      </>,
      <>
        <span className="font-bold">[Server Software Mgmt.] </span>
        Managed laboratory servers for large-scale calculation. Enforced
        security by configuring firewall policies to limit IP sources and
        automatically ban clients with repeated SSH authentication attempt
        failures. Set up Slurm Workload Manager for managing batch job
        submissions from multiple users, and to balance load across all compute
        nodes.
        <span className={tagStyle}>#linux</span>
        <span className={tagStyle}>#bash_scripting</span>
      </>,
      // <>
      //   <span className="font-bold">[Collaboration]</span> Participated in
      //   bi-weekly lab meetings with lab members, including advisor(faculty) and
      //   other students who were from various cultural backgrounds. Conducted
      //   presentations during these meetings detailing research status updates
      //   and prior research studies. Frequently communicated with collaborating
      //   labs located both domestic/overseas.
      // </>,
      <>
        <span className="font-bold">[DevOps]</span> Oversaw all code version
        control operations using Git: managed forked repositories, approved PRs,
        and resolved merge conflicts. While managing forked repositories,
        periodically checked upstream repo for new commits and merged the
        updates to the downstream repo, resolving any merge conflicts that
        occurred by communicating with the researcher in charge of the affected
        module. Also led periodic lab-wide meetings to consolidate downstream
        changes and create PRs, and then collaborated with upstream repo admins
        to merge the PRs to the upstream repo.
        <span className={tagStyle}>#git</span>
        <span className={tagStyle}>#github</span>
        <span className={tagStyle}>#gitlab</span>
      </>,
      <>
        <span className="font-bold">[Networking Mgmt.] </span>Configured network
        switches to create subnets for better firewall policy management. One
        subnet consisted of 5 workstations and a NAS for storing research data,
        and another consisted of security cameras and a NAS for storing security
        footage. Also configured router port-forwarding and firewall rules to
        allow remote access from trusted sources.
      </>,
      <>
        <span className="font-bold">[Server H/W Mgmt.] </span>
        Managed regular maintenance and replacement of server equipments
        including workstations, NVIDA GPUs, and Uninterruptible Power
        Supplies(UPS).
      </>,
      <>
        <span className="font-bold">Advisor:</span>{' '}
        <a
          href="https://sites.google.com/site/uicschun/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Dr. Sehun Chun (Assistant Professor of Applied Mathematics, Integrated
          Science and Engineering Division, Yonsei University)
        </a>
      </>,
    ],
  },
  {
    TITLE: '연구원',
    DIVISION: '언더우드 계산뇌과학연구실',
    AFFILIATION: '시스템과학융합연구원',
    CATEGORY: '업무 경험',
    LOCATION: '연세대학교 신촌캠퍼스',
    DETAILS: [
      <>
        <span className="font-bold">[연구내용] </span>뇌 확산텐서영상(DTI) 처리
        라이브러리 개발을 주도하며, 뇌 확산 MRI 영상 데이터에서 얻은 확산
        벡터들로부터 최소자승법(LSF) 및 경사하강법(GD)을 사용하여 확산 텐서를
        근사하는 알고리즘을 작성함. 또한, 뉴런 연결성 연구에 참여하여 뇌백질
        신경섬유추적지도 생성 알고리즘 개발에 기여함.
        <span className={tagStyle}>#c++</span>
        <span className={tagStyle}>#matlab</span>
        <span className={tagStyle}>#python</span>
      </>,
      <>
        <span className="font-bold">[서버관리-S/W] </span>
        연구실 내 대규모 연산 처리용 Linux 서버를 관리함. 방화벽 정책을 구성하여
        비정상적 SSH 접근 시도를 자동 차단하는 등 서버 보안 향상에 필요한 조치를
        취함. 작업 큐 관리자(Slurm)를 구성하여 다수의 유저들이 실행중인 작업들의
        모니터링을 가능하게 하고, 계산 노드들 전체에 부하가 분산되도록
        조치하였음. 주기적으로 software 및 OS 업데이트를 실행함.
        <span className={tagStyle}>#linux</span>
        <span className={tagStyle}>#ubuntu</span>
        <span className={tagStyle}>#bash_scripting</span>
      </>,
      // <>
      //   <span className="font-bold">[협업/소통] </span>
      //   연구실 전체 회의에 주기적으로 참석하여 지도교수 참관 하 연구 현황 보고와
      //   사전연구 조사 발표를 진행함. 또한, 해외 협력 연구실과의 공동 연구 회의에
      //   참여하여, 물리 엔진 라이브러리(Nektar++)에 뇌신경 신호 전파 시뮬레이션
      //   알고리즘을 추가하는데 기여하였음.
      // </>,
      <>
        <span className="font-bold">[DevOps] </span>
        연구실 내 코드 버전 관리(Git)를 총괄 담당하여 fork된 리포지토리 관리, PR
        승인, merge conflict 해결 등의 업무를 수행하였음. Fork된 리포지토리의
        경우, Upstream 업데이트 사항을 주기적으로 downstream으로 머지하고, 이
        과정에서 downstream과 충돌(conflict) 발생 시 해당 모듈 담당자와 회의를
        통해 충돌사항을 해결함. 또, downstream 변경사항을 취합 후 upstream으로
        PR을 생성하여, upstream 관리자와의 회의를 통해 upstream으로 PR을
        머지시키는 등의 업무를 담당함.
        <span className={tagStyle}>#git</span>
        <span className={tagStyle}>#github</span>
        <span className={tagStyle}>#gitlab</span>
      </>,
      <>
        <span className="font-bold">[서버관리-네트워크] </span> 네트워크 스위치
        설정을 통해 서브넷을 구성하여, 서버 워크스테이션 5대과 연구 데이터
        저장용 NAS를 한 서브넷에, 보안용 CCTV와 영상 저장용 NAS를 다른 서브넷에
        연결하여, 보안 관리가 용이하도록 조치함. 또한, 라우터 포트 포워딩 구성
        등을 통해 장비들에 원격 접근이 가능하도록 설정함.
      </>,
      <>
        <span className="font-bold">[서버관리-H/W] </span>
        워크스테이션, NVIDIA GPU, UPS 등 서버 운영에 필요한 장비들의 주기적 A/S
        및 교체를 관리하였음.
      </>,
      <>
        <span className="font-bold">지도교수: </span>{' '}
        <a
          href="https://sites.google.com/site/uicschun/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          천세훈 (연세대학교 융합과학공학부)
        </a>
      </>,
    ],
  }
);

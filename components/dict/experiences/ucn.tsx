import { createIntlDict } from '@/i18n';

export const ucnDict = createIntlDict(
  {
    TITLE: 'Research Assistant',
    DIVISION: 'Underwood Computational Neuroscience Laboratory',
    AFFILIATION: 'HCSS, Yonsei University',
    LOCATION: 'Seoul, South Korea',
    CATEGORY: 'Internship',
    DETAILS: [
      'Supported development of diffusion MRI high-order tractography calculation solvers using C++',
      'Developed of neuroimage data processing pipeline, including reading from raw images (such as DICOM and NiFTI) and mapping them to C/C++ datatypes',
      'Managed 2 laboratory computation workstations. Performed general maintenance including software dependency installs and firmware updates. Set up ssh and vnc remote access environments with best security practices including per-user privilege tuning and IP-based bans. Monitored server hardware status (CPU/GPU temperature, activity levels) periodically. Set up Linux environments and scripts for efficient monitoring and management of long-running server calculations (bash, tmux, conda, etc)',
      'Communicated with server workstation hardware providers for regular maintenance with the hardware providers, such as workstation NVIDIA GPU coolant refills and replacements.',
      'Management of laboratory code version control system (VCS) of major operations such as forking from upstream codebases, collaboration with external organizations and conflict resolving, using git',
      'Advisor: Dr. Sehun Chun (Assistant Professor of Mathematics, Integrated Science and Engineering Division, Yonsei University)',
    ],
  },
  {
    TITLE: '연구원',
    DIVISION: '언더우드 계산뇌과학연구실',
    AFFILIATION: '연세대학교 시스템과학융합원',
    CATEGORY: '인턴',
    LOCATION: '서울, 신촌',
  }
);

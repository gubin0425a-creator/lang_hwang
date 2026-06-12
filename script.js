// ============================================================================
// 1. Curriculum Database (중학교 2학년 2022 개정 공통 교육과정 기준)
// ============================================================================
const curriculumData = {
  "수학": {
    "1. 유리수와 순환소수": {
      "유리수와 순환소수": [
        {
          term: "유리수",
          definition: "분수 a/b (a, b는 정수, b는 0이 아님) 꼴로 나타낼 수 있는 수",
          mnemonic: "유리수 = '유'식하게 '분수'로 나타내는 수!",
          misconception: "모든 무한소수는 유리수가 아니다 (X, 순환소수는 무한소수이지만 분수로 나타낼 수 있으므로 유리수입니다)",
          explanation: "정수와 정수가 아닌 유리수로 구분되며, 결국 정수분의 정수 꼴인 분수로 적을 수 있는 모든 수입니다."
        },
        {
          term: "유한소수",
          definition: "소수점 아래의 0이 아닌 숫자가 유한개인 소수",
          mnemonic: "유한소수 = '유'통기한('한'계)이 있어 도중에 딱 끊기는 소수",
          misconception: "분모에 2나 5 이외의 소인수가 있어도 약분 후 상관없다 (X, 반드시 기약분수로 나타냈을 때 분모의 소인수가 2나 5뿐이어야 유한소수가 됩니다)",
          explanation: "끝이 있는 깔끔한 소수이며, 기약분수로 고쳤을 때 분모에 2나 5만 남는 특징을 가집니다."
        },
        {
          term: "순환소수",
          definition: "소수점 아래의 어떤 자리부터 일정한 숫자의 배열이 한없이 되풀이되는 무한소수",
          mnemonic: "순환소수 = '순'서대로 '환'상적으로 도는 끝없는 소수",
          misconception: "순환소수는 무한소수이므로 유리수가 될 수 없다 (X, 순환소수는 모두 분수로 나타낼 수 있으므로 유리수입니다)",
          explanation: "끝없이 늘어나는 무한소수이지만 규칙적으로 숫자가 반복되므로 분수(유리수)로 나타낼 수 있습니다."
        },
        {
          term: "순환마디",
          definition: "순환소수의 소수점 아래에서 숫자의 배열이 되풀이되는 가장 짧은 한 부분",
          mnemonic: "순환마디 = 반복되는 구간의 핵심 '마디'블록",
          misconception: "0.123123...의 순환마디는 1231이다 (X, 되풀이되는 부분 중 가장 짧고 최초인 123이 맞습니다)",
          explanation: "순환소수에서 반복을 이루는 최소 길이의 숫자 배열 단위입니다."
        }
      ],
      "순환소수의 분수 표현": [
        {
          term: "10의 거듭제곱 이용법",
          definition: "10, 100, 1000 등을 곱해 소수점 아래 부분을 같게 만들어 소수를 제거하는 방법",
          mnemonic: "거듭제곱법 = '10배, 100배' 곱해서 끝없는 소수점 아래 꼬리를 싹둑!",
          misconception: "순환소수에 임의의 10의 거듭제곱을 곱하면 무조건 소수 부분이 제거된다 (X, 소수점 아래의 순환마디 위치를 완벽히 일치시켜 빼야 합니다)",
          explanation: "적당한 10의 거듭제곱을 곱해 만든 두 식의 뺄셈을 통해 무한히 반복되는 뒷부분을 날려버리는 원리입니다."
        },
        {
          term: "공식 이용법",
          definition: "분모는 순환마디 숫자 개수만큼 9를 쓰고 그 뒤에 0을, 분자는 전체 수에서 순환하지 않는 부분을 빼서 구하는 방법",
          mnemonic: "공식법 = 분모는 '9와 0', 분자는 '전체 빼기 비순환'",
          misconception: "순환소수 0.12(2에 점)의 분모는 99이다 (X, 순환하는 자리는 1개이므로 9, 소수 첫째 자리는 순환 안 하므로 0을 붙여 90이 됩니다)",
          explanation: "식을 세우는 복잡한 과정 대신, 순환마디 개수와 소수점 아래 비순환 자리수를 세어 바로 분수로 바꾸는 공식입니다."
        }
      ]
    },
    "2. 식의 계산": {
      "지수법칙": [
        {
          term: "지수의 합",
          definition: "밑이 같은 두 거듭제곱의 곱은 지수끼리 더함: a^m * a^n = a^(m+n)",
          mnemonic: "지수의 합 = 밑이 서로 곱하면 지수는 '더하기'!",
          misconception: "a^2 * a^3 = a^6 이다 (X, a를 2번 곱한 것과 3번 곱한 것을 곱하면 총 5번 곱한 것이므로 지수를 더해야 합니다)",
          explanation: "밑이 동일한 거듭제곱을 곱할 때 곱하는 전체 횟수는 각 거듭제곱 지수의 덧셈이 된다는 기본 법칙입니다."
        },
        {
          term: "지수의 곱",
          definition: "거듭제곱의 거듭제곱은 지수끼리 곱함: (a^m)^n = a^(mn)",
          mnemonic: "지수의 곱 = 괄호를 뚫고 탈출할 땐 지수끼리 '곱하기'!",
          misconception: "(a^2)^3 = a^5 이다 (X, a^2을 3번 거듭제곱하는 것은 a^2 * a^2 * a^2 = a^6 이므로 지수를 곱해야 합니다)",
          explanation: "제곱 자체를 여러 번 반복하여 거듭할 때는 안쪽 지수와 바깥쪽 지수를 곱하여 총 횟수를 구합니다."
        },
        {
          term: "지수의 차",
          definition: "밑이 같은 두 거듭제곱의 나눗셈은 지수끼리 뺌: a^m / a^n",
          mnemonic: "지수의 차 = 나누기는 분모로 가니까 지수를 '빼기'!",
          misconception: "a^3 / a^3 = 0 이다 (X, 같은 수를 나누는 것이므로 결과는 1이 되며, 지수로도 a^(3-3) = a^0 = 1입니다)",
          explanation: "나눗셈을 분수 꼴로 고쳐 위아래를 약분하고 남은 개수를 세는 법칙으로, 빼는 순서에 따라 분모에 남기도 합니다."
        }
      ]
    }
  },
  "과학": {
    "1. 물질의 구성": {
      "원소와 원자": [
        {
          term: "원소",
          definition: "더 이상 다른 물질로 분해되지 않는 물질을 이루는 기본 성분",
          mnemonic: "원소 = 물질의 기본 '원'조 '소'스 종류",
          misconception: "물은 쪼갤 수 없으므로 원소이다 (X, 물은 수소와 산소로 분해되므로 원소가 아닙니다)",
          explanation: "수소, 산소, 철, 금과 같이 다른 물질로 분해할 수 없는 물질의 가장 기초가 되는 종류 성분입니다."
        },
        {
          term: "원자",
          definition: "물질을 이루는 가장 작은 기본 입자로, 원자핵과 전자로 구성됨",
          mnemonic: "원자 = 물질의 동글동글 '원'형 '자'석 입자",
          misconception: "원자는 전기적으로 항상 플러스를 띤다 (X, 양전하의 원자핵과 음전하의 전자의 총 전하량이 같아서 중성입니다)",
          explanation: "화학적 성질을 잃지 않고 쪼갤 수 있는 물질의 최소 단위 알갱이이며, 중심의 핵과 주변의 전자로 되어 있습니다."
        },
        {
          term: "원자핵",
          definition: "원자의 중심에 있고 양성자를 포함하여 양전하(+)를 띠며 질량의 대부분을 차지하는 부분",
          mnemonic: "원자핵 = 원자의 가운데 중심 '핵'심 뼈대",
          misconception: "원자핵의 크기는 원자 크기와 비슷하다 (X, 크기는 축구장의 개미처럼 작지만 질량은 원자 전체의 대부분을 차지합니다)",
          explanation: "원자 중심에 단단히 위치한 매우 무겁고 양전하를 가진 알갱이들의 뭉치입니다."
        },
        {
          term: "전자",
          definition: "원자핵 주위를 돌고 있으며 음전하(-)를 띠는 아주 가벼운 입자",
          mnemonic: "전자 = 원자핵 주위를 '전'속력으로 도는 '자'식들",
          misconception: "전자는 핵과 크기나 질량이 비슷하다 (X, 전자의 질량은 원자핵에 비해 무시할 수 있을 정도로 엄청나게 가볍습니다)",
          explanation: "핵 주변 공간에서 엄청나게 빠르게 회전하고 있는 마이너스 성질의 초미세 입자입니다."
        }
      ],
      "이온과 앙금 생성": [
        {
          term: "이온",
          definition: "중성 원자가 전자를 잃거나 얻어서 전하를 띠게 된 입자",
          mnemonic: "이온 = 전자가 '이'탈하거나 들어'온' 입자",
          misconception: "양이온은 양성자를 얻어서 전하를 띤 것이다 (X, 양성자는 핵에 고정되어 움직이지 않으며, 전자를 '잃어서' 양이온이 됩니다)",
          explanation: "가장 바깥 껍질의 전자를 잃으면 플러스 전하를 띠는 양이온, 전자를 얻으면 마이너스를 띠는 음이온이 됩니다."
        },
        {
          term: "앙금",
          definition: "특정 양이온 and 음이온이 결합하여 물에 녹지 않고 가라앉는 물질",
          mnemonic: "앙금 = 물에 안 녹고 '앙' 버티며 가라앉는 '금'속성 고체",
          misconception: "모든 종류의 이온 결합은 앙금을 만든다 (X, 나트륨 이온(Na+), 칼륨 이온(K+), 질산 이온(NO3-) 등은 앙금을 만들지 않습니다)",
          explanation: "수용액 속의 특정 이온들이 만나 서로 강하게 결합하여 물 분자가 떼어내지 못하고 고체로 변해 밑으로 가라앉은 물질입니다."
        }
      ]
    },
    "2. 전기와 자기": {
      "옴의 법칙 (전류, 전압, 저항)": [
        {
          term: "전류",
          definition: "전하의 흐름으로, 단위는 암페어(A)를 사용하며 전자의 이동 방향과 반대로 흐름",
          mnemonic: "전류 = 전기의 '흐를 류(流)' -> 전기가 흐르는 물줄기",
          misconception: "전류는 전자와 같은 방향으로 흐른다 (X, 전류의 방향은 플러스에서 마이너스로 정의되었으나, 전자는 마이너스에서 플러스로 흐릅니다)",
          explanation: "도선 속을 흐르는 전하의 흐름 강도로서, 전자기기를 작동시키는 실질적인 전기의 흐름입니다."
        },
        {
          term: "전압",
          definition: "전류를 흐르게 하는 능력(전기적 압력)으로, 단위는 볼트(V)를 사용함",
          mnemonic: "전압 = 전기를 미는 '압력(壓)'",
          misconception: "전압이 없어도 전류는 계속 흐를 수 있다 (X, 전압이라는 펌프가 압력을 밀어주어야만 전류가 지속적으로 흐르게 됩니다)",
          explanation: "전기 회로에서 전하를 밀어 전류를 지속적으로 흐르게 만드는 원동력이 되는 압력입니다."
        },
        {
          term: "저항",
          definition: "전류의 흐름을 방해하는 물질의 성질로, 단위는 옴(Ω)을 사용함",
          mnemonic: "저항 = 전류의 흐름에 '저항(방해)'하는 성질",
          misconception: "도선의 두께가 얇을수록 저항이 작아진다 (X, 길이와 단면적에 영향을 받으며 통로가 좁아질수록(얇을수록) 저항은 더 커집니다)",
          explanation: "전자가 이동할 때 원자들과 충돌하면서 흐름이 방해받는 정도로, 도선이 길고 얇을수록 저항 값이 커집니다."
        }
      ]
    }
  },
  "국어": {
    "1. 문학의 눈": {
      "비유와 상징 (시)": [
        {
          term: "비유",
          definition: "표현하려는 대상(원관념)을 친숙하거나 유사한 다른 대상(보조관념)에 빗대어 나타내는 방법",
          mnemonic: "비유 = 원관념과 '비'슷한 보조관념을 '유'추하여 연결하기",
          misconception: "비유는 오직 시에서만 사용할 수 있는 기법이다 (X, 일상 대화나 설명문 등 참신하고 생생한 전달이 필요한 모든 문장에서 쓰입니다)",
          explanation: "내 생각을 더 명확하고 매력적으로 전달하기 위해 다른 구체적인 대상의 성질을 빌려와서 비교하는 기법입니다."
        },
        {
          term: "직유법",
          definition: "'~같이', '~처럼', '~듯' 등의 연결어를 사용하여 원관념과 보조관념을 직접 연결하는 비유법",
          mnemonic: "직유 = 연결어와 함께 '직'접 대놓고 '유'사성을 밝힘",
          misconception: "'내 마음은 호수요'는 직유법이다 (X, 연결어가 없으므로 은유법입니다)",
          explanation: "두 대상을 직접 연결해 빗댐으로써 듣는 이가 비유하고 있음을 문장에서 단번에 알게 해주는 방식입니다."
        },
        {
          term: "은유법",
          definition: "연결어 없이 'A는 B이다' 형태로 원관념과 보조관념을 암시적으로 결합하는 비유법",
          mnemonic: "은유 = '은'밀하게 대상들을 포개어 '유'사성을 나타냄 (A = B)",
          misconception: "은유법은 연결어를 쓰지 않으므로 직유법보다 항상 비유 효과가 떨어진다 (X, 오히려 대상이 완전히 겹쳐져 강렬한 인상과 신비로움을 줍니다)",
          explanation: "단어 대 단어를 통째로 동일시하여 '너는 나의 봄이다'처럼 은밀하고 세련되게 의미를 전달하는 방법입니다. "
        },
        {
          term: "상징",
          definition: "눈에 보이지 않는 추상적인 가치나 생각(원관념)을 구체적인 사물(보조관념)로 표현하는 기법",
          mnemonic: "상징 = 추상적 가치를 하나의 사물에 '상'상하게 하여 '징'검다리를 놓음",
          misconception: "상징은 비유법처럼 문장 속에 원관념이 항상 친절하게 나타난다 (X, 상징은 원관념이 완전히 숨겨지고 보조관념인 사물만 문장에 등장합니다)",
          explanation: "비둘기=평화, 왕관=권력처럼, 깊고 넓은 가치를 대표적인 하나의 구체적인 상징물에 응축하여 전달하는 문화적 약속입니다."
        }
      ]
    }
  },
  "영어": {
    "1. Expressing Yourself": {
      "의사소통 및 회화 표현": [
        {
          term: "Prefer",
          definition: "두 대상을 비교하여 어떤 하나를 더 선호한다고 나타내는 표현 (e.g., I prefer A to B)",
          mnemonic: "Prefer = '프'랑스 요리보다 '퍼'(쌀국수)를 더 좋아해(prefer)",
          misconception: "prefer A to B에서 전치사 to는 방향(~로)의 의미를 나타낸다 (X, 여기서 to는 than(~보다)의 의미로 사용됩니다)",
          explanation: "선택지 중 어떤 쪽을 마음에 들어 하고 자주 고르는지 분명하게 밝힐 때 사용하는 핵심 의사소통 구문입니다."
        },
        {
          term: "Suggest",
          definition: "어떤 의견이나 제안을 정중히 구하거나 조언을 구할 때 쓰는 표현 (e.g., What do you suggest?)",
          mnemonic: "Suggest = 좋은 아이디어를 '서'로 '제'안(suggest)해 달라고 물어보기",
          misconception: "suggest 뒤에는 반드시 to부정사가 목적으로 와야 한다 (X, suggest는 동명사(-ing) 또는 that절을 목적으로 취합니다)",
          explanation: "상대방에게 추천할 만한 행동 방식이나 좋은 의견이 있는지 공손히 요청할 때 활용되는 동사입니다."
        }
      ]
    }
  },
  "역사": {
    "1. 선사 시대와 고대 국가": {
      "인류의 출현과 신석기 혁명": [
        {
          term: "구석기 시대",
          definition: "뗀석기를 도구로 사용하고 사냥과 채집을 하며 동굴이나 막집에서 이동 생활을 하던 시대",
          mnemonic: "구석기 = '구'식 돌을 깨뜨린(뗀석기) 도구로 동굴 '구석'에서 살던 인류의 초기 시대",
          misconception: "구석기 시대에도 한곳에 정착하여 대규모 농사를 지으며 살았다 (X, 구석기에는 농사를 짓지 못해 식량을 찾아 계속 돌아다니는 이동 생활을 했습니다)",
          explanation: "돌을 부딪쳐 깨뜨린 뗀석기를 도구로 삼아 수확이나 재배 없이 자연 그대로 채집하며 살던 긴 역사적 기간입니다."
        },
        {
          term: "신석기 혁명",
          definition: "농경과 목축의 시작으로 정착 생활을 하게 되면서 인류의 삶이 획기적으로 변화한 사건",
          mnemonic: "신석기 혁명 = '신'나게 스스로 '농사' 지으며 '혁명'을 일으켜 마을에 정착함",
          misconception: "신석기 혁명이 일어나자마자 계급과 국가가 동시에 탄생했다 (X, 정착하여 농사를 지었으나 여전히 재산과 힘이 평등한 공동체였습니다. 계급은 청동기 이후 발생합니다)",
          explanation: "처음으로 인류가 먹을 것을 자연에서 찾는 대신 직접 작물을 심고 가축을 길러 정착 주거를 시작한 문명적 대변혁입니다."
        },
        {
          term: "빗살무늬 토기",
          definition: "신석기 시대의 대표적인 토기로 밑이 뾰족하거나 둥글고 겉면에 빗살 모양 무늬가 있는 식량 저장 도구",
          mnemonic: "빗살무늬 토기 = '빗'으로 '살'며시 그은 것 같은 무늬의 저장용 진흙 그릇",
          misconception: "빗살무늬 토기의 밑이 뾰족한 이유는 서 있는 식탁에 올려놓기 위해서였다 (X, 강가나 바닷가 모래 또는 진흙땅에 꽂아 세워두기 좋게 만든 것임)",
          explanation: "진흙을 구워 만든 인류 최초의 화학적 발명품 중 하나로 식량 보관과 요리에 쓰였습니다."
        }
      ]
    }
  }
};

// ============================================================================
// 2. State Management & Initialization
// ============================================================================
const defaultState = {
  xp: 0,
  streak: 0,
  gems: 500,
  hearts: 5,
  selectedSubject: "수학",
  selectedUnit: "1. 유리수와 순환소수",
  selectedSubunit: "유리수와 순환소수",
  progress: {} // key: "Subject|Unit|Subunit" -> value: stepIndex (0 to 4. 5 means completed)
};

let appState = { ...defaultState };

try {
  const saved = localStorage.getItem('allcleState');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(appState, parsed);
  }
} catch (e) {
  console.error("Failed to load local storage state:", e);
}

// Ensure progress object exists
if (!appState.progress) {
  appState.progress = {};
}

// Sanitize state values against curriculumData (Prevents undefined crashes)
if (!curriculumData[appState.selectedSubject]) {
  appState.selectedSubject = Object.keys(curriculumData)[0];
}
if (!curriculumData[appState.selectedSubject][appState.selectedUnit]) {
  appState.selectedUnit = Object.keys(curriculumData[appState.selectedSubject])[0];
}
if (!curriculumData[appState.selectedSubject][appState.selectedUnit][appState.selectedSubunit]) {
  appState.selectedSubunit = Object.keys(curriculumData[appState.selectedSubject][appState.selectedUnit])[0];
}

// 5 Master Steps (Node Configurations)
const nodeStyles = [
  { left: '0px', marginTop: '20px', icon: 'book-open', label: '1단계: 개념 청킹' },
  { left: '-30px', marginTop: '60px', icon: 'brain', label: '2단계: 액티브 리콜' },
  { left: '-40px', marginTop: '60px', icon: 'key', label: '3단계: 두문자 암기' },
  { left: '-10px', marginTop: '60px', icon: 'alert-triangle', label: '4단계: 함정 제거' },
  { left: '30px', marginTop: '60px', marginBottom: '60px', icon: 'trophy', label: '5단계: 최종 올클' }
];

let currentLessonData = [];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let isAnswerChecked = false;
let activeLessonIndex = 0; // The step number of the node (0 to 4)

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Initialize Dropdowns Safely
  initDropdowns();

  // 3. Setup Curriculum Selector Modal
  setupCurriculumModal();

  // 4. Setup Guidebook Modal Listeners
  setupGuidebookModal();

  // 5. Setup Main Navigation Close Lesson Button
  document.getElementById('close-lesson').addEventListener('click', () => {
    if (confirm("공부를 중단하시겠습니까? 이번 단계의 학습 진행 상황이 저장되지 않습니다.")) {
      closeLesson();
    }
  });

  document.getElementById('check-btn').addEventListener('click', handleCheckBtnClick);

  // Render initial dashboard stats
  renderStats();
});

// ============================================================================
// 3. Dropdowns Setup & Safe Listener Logic
// ============================================================================
function initDropdowns() {
  const subjectSelect = document.getElementById('subject-select');
  const unitSelect = document.getElementById('unit-select');
  const subunitSelect = document.getElementById('subunit-select');

  // Populate Subjects
  subjectSelect.innerHTML = '';
  Object.keys(curriculumData).forEach(subject => {
    const opt = document.createElement('option');
    opt.value = subject;
    opt.textContent = subject;
    subjectSelect.appendChild(opt);
  });

  // Ensure subject selection is valid, then set it
  if (!curriculumData[appState.selectedSubject]) {
    appState.selectedSubject = Object.keys(curriculumData)[0];
  }
  subjectSelect.value = appState.selectedSubject;

  // Populate Units based on Subject
  updateUnitDropdown();
  
  // Ensure unit selection is valid, then set it
  if (!curriculumData[appState.selectedSubject][appState.selectedUnit]) {
    appState.selectedUnit = Object.keys(curriculumData[appState.selectedSubject])[0];
  }
  unitSelect.value = appState.selectedUnit;

  // Populate Subunits based on Unit
  updateSubunitDropdown();
  
  // Ensure subunit selection is valid, then set it
  if (!curriculumData[appState.selectedSubject][appState.selectedUnit][appState.selectedSubunit]) {
    appState.selectedSubunit = Object.keys(curriculumData[appState.selectedSubject][appState.selectedUnit])[0];
  }
  subunitSelect.value = appState.selectedSubunit;

  // Listeners
  subjectSelect.addEventListener('change', () => {
    appState.selectedSubject = subjectSelect.value;
    updateUnitDropdown();
    
    // Set default unit to first option of the new subject
    appState.selectedUnit = unitSelect.value;
    updateSubunitDropdown();
    
    // Set default subunit to first option of the new unit
    appState.selectedSubunit = subunitSelect.value;
    
    saveState();
    renderDashboard();
  });

  unitSelect.addEventListener('change', () => {
    appState.selectedUnit = unitSelect.value;
    updateSubunitDropdown();
    
    // Set default subunit to first option of the new unit
    appState.selectedSubunit = subunitSelect.value;
    
    saveState();
    renderDashboard();
  });

  subunitSelect.addEventListener('change', () => {
    appState.selectedSubunit = subunitSelect.value;
    
    saveState();
    renderDashboard();
  });

  // First render
  renderDashboard();
}

function updateUnitDropdown() {
  const subjectSelect = document.getElementById('subject-select');
  const unitSelect = document.getElementById('unit-select');
  const subject = subjectSelect.value;

  unitSelect.innerHTML = '';
  if (curriculumData[subject]) {
    Object.keys(curriculumData[subject]).forEach(unit => {
      const opt = document.createElement('option');
      opt.value = unit;
      opt.textContent = unit;
      unitSelect.appendChild(opt);
    });
  }
}

function updateSubunitDropdown() {
  const subjectSelect = document.getElementById('subject-select');
  const unitSelect = document.getElementById('unit-select');
  const subunitSelect = document.getElementById('subunit-select');
  const subject = subjectSelect.value;
  const unit = unitSelect.value;

  subunitSelect.innerHTML = '';
  if (curriculumData[subject] && curriculumData[subject][unit]) {
    Object.keys(curriculumData[subject][unit]).forEach(subunit => {
      const opt = document.createElement('option');
      opt.value = subunit;
      opt.textContent = subunit;
      subunitSelect.appendChild(opt);
    });
  }
}

// ============================================================================
// 4. Curriculum Selector Modal
// ============================================================================
function setupCurriculumModal() {
  const modal = document.getElementById('curriculum-modal');
  const btn = document.getElementById('current-subject-badge');
  const closeBtn = document.getElementById('close-curriculum');
  const applyBtn = document.getElementById('apply-curriculum-btn');

  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeBtn.addEventListener('click', closeModal);
  applyBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// ============================================================================
// 5. TTS (Text-to-Speech) System
// ============================================================================
let koreanVoice = null;
let englishVoice = null;

function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  koreanVoice = voices.find(v => v.lang.includes('ko') && (v.name.includes('Natural') || v.name.includes('Google')))
             || voices.find(v => v.lang.includes('ko'));
  englishVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google')))
              || voices.find(v => v.lang.includes('en'));
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

function playSound(text) {
  if (!text) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // stop current sound
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Check if English or Korean
    const hasEnglish = /[a-zA-Z]/.test(text);
    if (hasEnglish) {
      utterance.lang = 'en-US';
      if (englishVoice) utterance.voice = englishVoice;
      utterance.rate = 0.95;
    } else {
      utterance.lang = 'ko-KR';
      if (koreanVoice) utterance.voice = koreanVoice;
      utterance.rate = 0.9; // 또박또박 발음
    }
    
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// ============================================================================
// 6. Dashboard Rendering (Dynamic Map & Stats)
// ============================================================================
function renderStats() {
  document.querySelector('.streak .value').textContent = appState.streak;
  document.querySelector('.gems .value').textContent = appState.gems;
  document.querySelector('.hearts .value').textContent = appState.hearts;

  // Badge Text
  document.getElementById('subject-badge-text').textContent = appState.selectedSubject;

  // Update Daily Quests Progress
  const xpProgress = Math.min(100, (appState.xp / 50) * 100);
  const progressFills = document.querySelectorAll('.progress-fill');
  if (progressFills.length > 0) {
    progressFills[0].style.width = `${xpProgress}%`;
  }
}

function renderDashboard() {
  renderStats();

  // Update Header title and sub-description
  document.getElementById('current-unit-title').textContent = appState.selectedUnit;
  document.getElementById('current-unit-desc').textContent = appState.selectedSubunit;

  // Render Map Nodes
  const pathContainer = document.querySelector('.learning-path');
  
  // Keep the background SVG path line
  pathContainer.innerHTML = `
    <svg class="path-line" viewBox="0 0 100 500" preserveAspectRatio="none">
      <path d="M50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600" fill="none" stroke="#e5e7eb" stroke-width="12" stroke-linecap="round"></path>
    </svg>
  `;

  // Get current progress key
  const progressKey = `${appState.selectedSubject}|${appState.selectedUnit}|${appState.selectedSubunit}`;
  const currentProgress = appState.progress[progressKey] !== undefined ? appState.progress[progressKey] : 0; // 0 to 4. 5 means all cleared

  nodeStyles.forEach((style, index) => {
    const nodeContainer = document.createElement('div');
    
    let statusClass = 'locked';
    let iconName = 'lock';
    
    if (index < currentProgress) {
      statusClass = 'completed';
      iconName = 'check';
    } else if (index === currentProgress) {
      statusClass = 'active';
      iconName = style.icon;
    } else {
      statusClass = 'locked';
      iconName = 'lock';
    }

    nodeContainer.className = `node-container ${statusClass}`;
    nodeContainer.style.left = style.left;
    nodeContainer.style.marginTop = style.marginTop;
    if (style.marginBottom) {
      nodeContainer.style.marginBottom = style.marginBottom;
    }

    // Tooltip for active node
    if (statusClass === 'active') {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = style.label;
      nodeContainer.appendChild(tooltip);
    }

    const button = document.createElement('button');
    button.className = `lesson-node ${index === 4 ? 'trophy-node' : (index === 0 ? 'crown-node' : '')}`;
    
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', iconName);
    if (statusClass === 'completed' || statusClass === 'active') {
      icon.setAttribute('fill', 'currentColor');
    }
    button.appendChild(icon);
    
    // Add Click listener if unlocked (completed or active)
    if (statusClass === 'completed' || statusClass === 'active') {
      button.addEventListener('click', () => {
        startLesson(index);
      });
    }

    nodeContainer.appendChild(button);
    pathContainer.appendChild(nodeContainer);
  });

  // Re-generate Lucide Icons in the newly injected HTML
  lucide.createIcons();
}

function saveState() {
  localStorage.setItem('allcleState', JSON.stringify(appState));
}

// ============================================================================
// 7. Guidebook Modal
// ============================================================================
function setupGuidebookModal() {
  const modal = document.getElementById('guidebook-modal');
  const btn = document.getElementById('guidebook-btn');
  const closeBtn = document.getElementById('close-modal');

  btn.addEventListener('click', () => {
    // Populate Modal Content
    const subject = appState.selectedSubject;
    const unit = appState.selectedUnit;
    const subunit = appState.selectedSubunit;
    const concepts = curriculumData[subject][unit][subunit];

    document.getElementById('modal-title').textContent = `[${subject}] ${subunit} 핵심요약`;
    
    const body = document.getElementById('modal-body');
    body.innerHTML = '';

    concepts.forEach(c => {
      const card = document.createElement('div');
      card.className = 'guide-concept-card';
      
      const title = document.createElement('h3');
      title.textContent = c.term;
      card.appendChild(title);

      const def = document.createElement('p');
      def.innerHTML = `<strong>정의:</strong> ${c.definition}`;
      card.appendChild(def);

      const exp = document.createElement('p');
      exp.innerHTML = `<strong>뇌과학 해설:</strong> ${c.explanation}`;
      card.appendChild(exp);

      const mnem = document.createElement('div');
      mnem.className = 'guide-mnemonic';
      mnem.textContent = `💡 연상 공식: ${c.mnemonic}`;
      card.appendChild(mnem);

      body.appendChild(card);
    });

    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// ============================================================================
// 8. Dynamic Question Generator (Neuroscience-based)
// ============================================================================
function getDistractors(type, correctValue) {
  const list = [];
  for (const subject of Object.keys(curriculumData)) {
    for (const unit of Object.keys(curriculumData[subject])) {
      for (const subunit of Object.keys(curriculumData[subject][unit])) {
        for (const concept of curriculumData[subject][unit][subunit]) {
          const val = concept[type];
          if (val && val !== correctValue) {
            list.push(val);
          }
        }
      }
    }
  }
  const uniqueList = Array.from(new Set(list));
  // Shuffle and take 3
  return uniqueList.sort(() => Math.random() - 0.5).slice(0, 3);
}

function generateLessonData(nodeIndex) {
  const subject = appState.selectedSubject;
  const unit = appState.selectedUnit;
  const subunit = appState.selectedSubunit;
  const concepts = curriculumData[subject][unit][subunit];

  const questions = [];

  // Generate 15 questions, cycling through available concepts
  for (let i = 0; i < 15; i++) {
    const concept = concepts[i % concepts.length];
    let qType = nodeIndex;
    
    // Node 4 is "Final All-Cle", mix all previous types
    if (nodeIndex === 4) {
      qType = Math.floor(Math.random() * 4);
    }

    let questionText = "";
    let options = [];
    let correctAnswer = "";
    let typeLabel = "개념 청킹";

    if (qType === 0) {
      // Chunking: matching term and definitions
      typeLabel = "개념 청킹";
      const subType = i % 2;
      if (subType === 0) {
        questionText = `다음 학술적 정의에 해당하는 핵심 용어(개념)는 무엇인가요?\n\n"${concept.definition}"`;
        correctAnswer = concept.term;
        options = [correctAnswer, ...getDistractors("term", correctAnswer)];
      } else {
        questionText = `핵심 용어 '${concept.term}'의 올바른 사전적 정의를 골라 연결해 보세요.`;
        correctAnswer = concept.definition;
        options = [correctAnswer, ...getDistractors("definition", correctAnswer)];
      }
    } else if (qType === 1) {
      // Active Recall: direct retrieval from descriptive language
      typeLabel = "액티브 리콜";
      const subType = i % 2;
      if (subType === 0) {
        questionText = `[뇌과학 직관 설명] 아래 설명을 읽고 지식을 인출(Active Recall)해 빈칸에 들어갈 용어를 맞추세요.\n\n"${concept.explanation}"`;
        correctAnswer = concept.term;
        options = [correctAnswer, ...getDistractors("term", correctAnswer)];
      } else {
        questionText = `핵심 용어 '${concept.term}'의 뇌과학적 원리와 직관적인 쉬운 해설을 적절하게 설명한 진술은?`;
        correctAnswer = concept.explanation;
        options = [correctAnswer, ...getDistractors("explanation", correctAnswer)];
      }
    } else if (qType === 2) {
      // Mnemonics
      typeLabel = "두문자 연상";
      questionText = `이 개념을 장기 기억으로 전이하기 위해 연상(Mnemonic) 뇌 지도를 활용하는 올바른 연상 비법은?\n\n[용어: ${concept.term}]`;
      correctAnswer = concept.mnemonic;
      options = [correctAnswer, ...getDistractors("mnemonic", correctAnswer)];
    } else if (qType === 3) {
      // Metacognition (Misconceptions)
      typeLabel = "함정 제거";
      questionText = `개념 '${concept.term}'에 대해 학교 시험 등에서 자주 범하는 **잘못된 설명(함정 지문)**은 무엇일까요?`;
      correctAnswer = concept.misconception;

      // Distractors are correct descriptions of the concept (making them incorrect answers to "spot the mistake")
      const correctFacts = [concept.definition, concept.explanation];
      // Grab 1 extra correct definition from another concept
      const otherConcepts = [];
      for (const s of Object.keys(curriculumData)) {
        for (const u of Object.keys(curriculumData[s])) {
          for (const sub of Object.keys(curriculumData[s][u])) {
            for (const c of curriculumData[s][u][sub]) {
              if (c.term !== concept.term) {
                otherConcepts.push(c.definition);
              }
            }
          }
        }
      }
      if (otherConcepts.length > 0) {
        correctFacts.push(otherConcepts[Math.floor(Math.random() * otherConcepts.length)]);
      } else {
        correctFacts.push("이 개념은 핵심 공통 교과 범위의 중요한 성취기준에 부합합니다.");
      }

      options = [correctAnswer, ...correctFacts];
    }

    // Shuffle options
    options = options.sort(() => Math.random() - 0.5);
    const answerIndex = options.indexOf(correctAnswer);

    questions.push({
      question: questionText,
      options: options,
      answer: answerIndex,
      typeLabel: typeLabel,
      targetTerm: concept.term // Read this term using TTS
    });
  }

  return questions;
}

// ============================================================================
// 9. Learning Gameplay Loop
// ============================================================================
function startLesson(nodeIndex) {
  if (appState.hearts <= 0) {
    alert("하트가 부족합니다! 보석으로 상점에서 충전하거나 나중에 다시 도전해 주세요.");
    return;
  }

  activeLessonIndex = nodeIndex;
  currentLessonData = generateLessonData(nodeIndex);
  currentQuestionIndex = 0;
  isAnswerChecked = false;
  selectedOptionIndex = null;

  document.getElementById('dashboard-view').style.display = 'none';
  document.getElementById('lesson-view').style.display = 'flex';

  renderQuestion();
}

function renderQuestion() {
  const currentQ = currentLessonData[currentQuestionIndex];

  // Update progress bar
  const progress = (currentQuestionIndex / currentLessonData.length) * 100;
  document.getElementById('lesson-progress-fill').style.width = `${progress}%`;

  // Update Type Badge
  document.getElementById('lesson-type-badge').textContent = currentQ.typeLabel;

  // Update Question Text
  document.getElementById('question-text').textContent = currentQ.question;

  // Setup Sound Button (using the target term of the concept)
  const soundBtn = document.getElementById('play-question-sound');
  soundBtn.style.display = 'flex';
  soundBtn.onclick = () => playSound(currentQ.targetTerm);

  // Auto-play TTS
  playSound(currentQ.targetTerm);

  // Render Options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(btn);
  });

  resetFooter();
}

function selectOption(index) {
  if (isAnswerChecked) return;

  selectedOptionIndex = index;
  
  // Play the sound of option if it's brief
  const currentQ = currentLessonData[currentQuestionIndex];
  if (currentQ.options[index].length < 15) {
    playSound(currentQ.options[index]);
  }

  const options = document.querySelectorAll('.option-btn');
  options.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  document.getElementById('check-btn').disabled = false;
}

// Handle Check Button Click
function handleCheckBtnClick() {
  if (!isAnswerChecked) {
    checkAnswer();
  } else {
    nextQuestion();
  }
}

function checkAnswer() {
  if (selectedOptionIndex === null) return;

  isAnswerChecked = true;
  const currentQ = currentLessonData[currentQuestionIndex];
  const isCorrect = selectedOptionIndex === currentQ.answer;

  const options = document.querySelectorAll('.option-btn');
  const footer = document.getElementById('lesson-footer');
  const checkBtn = document.getElementById('check-btn');
  const feedbackMsg = document.getElementById('feedback-message');

  if (isCorrect) {
    options[selectedOptionIndex].classList.add('correct');
    options[selectedOptionIndex].classList.remove('selected');

    footer.classList.add('correct-state');
    feedbackMsg.innerHTML = '<i data-lucide="check-circle" size="32"></i> 정답입니다! 뇌 회로 각인 완료!';
    feedbackMsg.className = 'feedback-message correct-text';
    
    playSound("정답");
  } else {
    options[selectedOptionIndex].classList.add('wrong');
    options[selectedOptionIndex].classList.remove('selected');

    // Highlight correct answer
    options[currentQ.answer].classList.add('correct');

    footer.classList.add('wrong-state');
    feedbackMsg.innerHTML = '<i data-lucide="x-circle" size="32"></i> 오답입니다. 정답을 암기하세요!';
    feedbackMsg.className = 'feedback-message wrong-text';
    checkBtn.classList.add('wrong-btn');

    appState.hearts = Math.max(0, appState.hearts - 1);
    
    playSound("오답");
  }

  checkBtn.textContent = '계속하기';
  lucide.createIcons();
}

function nextQuestion() {
  currentQuestionIndex++;

  if (appState.hearts <= 0) {
    alert("하트를 모두 잃었습니다! 학습이 강제 종료됩니다. 상점에서 보석으로 리필할 수 있습니다.");
    closeLesson();
    return;
  }

  if (currentQuestionIndex >= currentLessonData.length) {
    finishLesson();
  } else {
    isAnswerChecked = false;
    selectedOptionIndex = null;
    renderQuestion();
  }
}

function resetFooter() {
  const footer = document.getElementById('lesson-footer');
  const checkBtn = document.getElementById('check-btn');
  const feedbackMsg = document.getElementById('feedback-message');

  footer.className = 'lesson-footer';
  feedbackMsg.innerHTML = '';
  feedbackMsg.className = 'feedback-message';
  
  checkBtn.textContent = '확인';
  checkBtn.className = 'check-btn';
  checkBtn.disabled = true;
}

function closeLesson() {
  document.getElementById('lesson-view').style.display = 'none';
  document.getElementById('dashboard-view').style.display = 'flex';
  renderDashboard();
}

function finishLesson() {
  // Update state
  appState.xp += 15; // 15 XP per study node
  
  const progressKey = `${appState.selectedSubject}|${appState.selectedUnit}|${appState.selectedSubunit}`;
  const currentProgress = appState.progress[progressKey] !== undefined ? appState.progress[progressKey] : 0;

  // If they completed the active node, increment subunit progress!
  if (activeLessonIndex === currentProgress) {
    if (currentProgress < 5) {
      appState.progress[progressKey] = currentProgress + 1;
    }
  }

  appState.streak = Math.max(1, appState.streak + 1);
  
  saveState();
  
  alert(`학습 완료! +15 XP 획득! (현재 스트릭: ${appState.streak}일)`);
  closeLesson();
}

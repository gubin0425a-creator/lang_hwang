// ============================================================================
// 1. Curriculum Database (중학교 2학년 2022 개정 공통 교육과정 기준 - 전과목 전단원)
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
          definition: "분모는 순환마디 개수만큼 9를 쓰고 그 뒤에 0을, 분자는 전체 수에서 순환하지 않는 부분을 빼서 구하는 방법",
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
      ],
      "단항식과 다항식의 계산": [
        {
          term: "단항식의 곱셈",
          definition: "계수는 계수끼리, 문자는 문자끼리 곱하여 계산하며 같은 문자는 지수법칙을 이용함",
          mnemonic: "단항식 곱셈 = 숫자는 숫자끼리, 문자는 '지수 더하기'로!",
          misconception: "2a * 3a = 6a 이다 (X, a가 두 번 곱해지므로 지수법칙에 의해 6a^2이 됩니다)",
          explanation: "곱하기로 이어진 단일 항들의 계산으로, 계수끼리의 일반 곱셈과 문자끼리의 지수 결합을 진행합니다."
        },
        {
          term: "다항식의 덧셈과 뺄셈",
          definition: "괄호를 풀고 동류항끼리 모아서 계수끼리 더하거나 빼서 계산함",
          mnemonic: "다항식 연산 = '끼리끼리' 동류항 모으기!",
          misconception: "3x + 2y = 5xy 이다 (X, x와 y는 동류항이 아니므로 더 이상 덧셈을 진행할 수 없습니다)",
          explanation: "문자와 지수가 완전히 같은 '동류항'들끼리만 결합이 가능하다는 식의 정리 규칙입니다."
        }
      ]
    },
    "3. 일차부등식과 방정식": {
      "일차부등식의 풀이": [
        {
          term: "부등식의 성질",
          definition: "부등식의 양변에 음수를 곱하거나 나누면 부등호의 방향이 바뀐다는 법칙",
          mnemonic: "부등호 역전 = '음수'를 곱하거나 나눌 때만 부등호가 반대로 휙!",
          misconception: "양변에 음수를 더하거나 빼면 부등호 방향이 바뀐다 (X, 덧셈과 뺄셈은 음수를 다루더라도 부등호 방향이 절대 바뀌지 않습니다)",
          explanation: "양수 연산은 상관없으나, 양변에 음수를 곱하거나 나눌 때에만 대소 관계가 뒤집혀 부등호 방향이 반전됩니다."
        },
        {
          term: "일차부등식",
          definition: "모든 항을 좌변으로 이항하여 정리했을 때 (일차식) > 0 꼴로 나타나는 부등식",
          mnemonic: "일차부등식 = 정리했을 때 'x의 1차'만 꿋꿋이 살아남은 부등식",
          misconception: "x + 2 > x - 1 은 일차부등식이다 (X, 이항하면 x가 사라져 3 > 0 이 되므로 일차부등식이 아닙니다)",
          explanation: "미지수 x의 최고 차수가 1인 부등식으로, x의 범위를 구하는 것이 풀이의 목표입니다."
        }
      ],
      "연립일차방정식의 풀이": [
        {
          term: "연립방정식",
          definition: "두 개 이상의 방정식을 한 쌍으로 묶어 나타낸 방정식",
          mnemonic: "연립방정식 = 연립주택처럼 '두 식'이 나란히 묶인 방정식",
          misconception: "연립방정식의 해는 각 방정식의 해 중 아무거나 하나면 된다 (X, 두 방정식을 '동시에' 참이 되게 하는 공통의 해여야 합니다)",
          explanation: "두 미지수가 포함된 두 방정식을 연립하여 두 조건을 동시에 만족하는 x, y 값을 찾아내는 과정입니다."
        },
        {
          term: "가감법",
          definition: "두 방정식의 양변에 적당한 수를 곱해서 한 미지수의 계수를 같게 만든 후, 두 식을 더하거나 빼서 그 미지수를 없애는 방법",
          mnemonic: "가감법 = '더하거나(加) 빼서(減)' 문자 하나를 암살(소거)하기",
          misconception: "가감법을 쓸 때 무조건 x만 없애야 한다 (X, y의 계수를 맞춰 y를 없애도 풀이 결과는 동일합니다)",
          explanation: "계수를 맞추기 위해 곱셈을 한 뒤 더하거나 빼서 미지수 하나를 소거하여 1원 일차방정식으로 만드는 방법입니다."
        },
        {
          term: "대입법",
          definition: "한 방정식을 하나의 미지수에 대한 식으로 정리한 후, 이를 다른 방정식에 대입하여 미지수를 없애는 방법",
          mnemonic: "대입법 = x나 y 자리에 통째로 식을 '대입(대신 넣기)'하기",
          misconception: "대입법은 가감법보다 항상 어렵다 (X, 이미 한 문자로 식이 정리되어 있는 경우(예: y = 2x+1) 대입법이 훨씬 빠릅니다)",
          explanation: "하나의 문자를 다른 식으로 대체(대입)하여 식 전체의 미지수를 하나로 통일하는 방법입니다."
        }
      ]
    },
    "4. 일차함수": {
      "일차함수와 그래프": [
        {
          term: "일차함수",
          definition: "y가 x에 관한 일차식 y = ax + b (a는 0이 아님)로 나타나는 함수 관계",
          mnemonic: "일차함수 = y = ax + b, 직선을 그리는 마법의 식!",
          misconception: "y = 3/x 은 일차함수이다 (X, 분모에 x가 있는 식은 일차식이 아니므로 일차함수가 아닙니다)",
          explanation: "x 값이 변함에 따라 y 값이 일정한 비율로 비례하여 증가하거나 감소하는 함수로, 그래프는 직선이 됩니다."
        },
        {
          term: "기울기",
          definition: "일차함수 y = ax + b에서 x의 값의 증가량에 대한 y의 값의 증가량의 비율인 상수 a",
          mnemonic: "기울기 = 'x의 증가량 분의 y의 증가량' -> 경사도!",
          misconception: "y = -2x + 3에서 기울기는 2이다 (X, 부호까지 포함하여 x 앞의 계수인 -2가 기울기입니다)",
          explanation: "직선 그래프가 오른쪽 위로 향하는지(-), 오른쪽 아래로 향하는지(-) 및 경사가 얼마나 가파른지 나타냅니다."
        }
      ],
      "일차함수와 일차방정식": [
        {
          term: "두 직선의 교점",
          definition: "두 일차함수 그래프가 만나는 점으로, 두 식을 연립한 연립방정식의 해와 같음",
          mnemonic: "직선의 교점 = 연립방정식의 유일한 '해'!",
          misconception: "두 직선이 평행해도 교점이 존재한다 (X, 평행한 두 직선은 평생 만나지 않으므로 교점이 없고 연립방정식의 해도 없습니다)",
          explanation: "기하학적 도형(그래프의 교점)과 대수학적 수식(연립방정식의 해)이 서로 완벽하게 연결되는 핵심 개념입니다."
        }
      ]
    },
    "5. 도형의 성질": {
      "삼각형의 성질": [
        {
          term: "이등변삼각형",
          definition: "두 변의 길이가 같은 삼각형으로, 두 밑각의 크기가 같고 꼭지각의 이등분선은 밑변을 수직이등분함",
          mnemonic: "이등변삼각형 = '두 변'이 같아서 '두 밑각'도 같은 삼각형",
          misconception: "이등변삼각형의 임의의 각의 이등분선은 대변을 수직이등분한다 (X, 꼭지각의 이등분선만 밑변을 수직이등분합니다)",
          explanation: "양 두 변의 길이가 같아 생기는 좌우 대칭적인 성질로 인해 밑각의 크기가 완벽히 같은 삼각형입니다."
        },
        {
          term: "외심",
          definition: "삼각형의 세 변의 수직이등분선의 교점으로, 외접원의 중심이며 세 꼭짓점에 이르는 거리가 같음",
          mnemonic: "외심 = 세 꼭짓점까지 거리가 같은 '바깥 외(外)'접원의 중심",
          misconception: "모든 삼각형의 외심은 삼각형의 내부에 존재한다 (X, 둔각삼각형의 외심은 삼각형 바깥에, 직각삼각형의 외심은 빗변의 중심에 존재합니다)",
          explanation: "세 변을 반으로 쪼개 수직으로 올린 선들이 만나는 점으로, 삼각형을 밖에서 감싸는 원의 중심입니다."
        },
        {
          term: "내심",
          definition: "삼각형의 세 내각의 이등분선의 교점으로, 내접원의 중심이며 세 변에 이르는 거리가 같음",
          mnemonic: "내심 = 세 변까지 거리가 같은 '안 내(內)'접원의 중심",
          misconception: "내심에서 세 꼭짓점에 이르는 거리는 항상 같다 (X, 외심이 꼭짓점까지 거리가 같고, 내심은 '세 변'에 이르는 수직 거리가 같습니다)",
          explanation: "세 내각을 이등분한 선들의 교점으로, 삼각형 내부에서 세 변에 딱 맞닿아 접하는 원의 중심입니다."
        }
      ],
      "사각형의 성질": [
        {
          term: "평행사변형",
          definition: "두 쌍의 대변이 각각 평행한 사각형으로, 대변 길이와 대각 크기가 같고 대각선은 서로를 이등분함",
          mnemonic: "평행사변형 = 마주보는 두 쌍이 '평행'하여 대칭을 이루는 사각형",
          misconception: "평행사변형의 대각선 길이는 항상 같다 (X, 대각선의 길이는 직사각형과 정사각형만 같습니다)",
          explanation: "가장 기본이 되는 평행선 기반의 사각형으로, 마주보는 변과 각이 같고 대각선이 서로를 반으로 나눕니다."
        }
      ]
    },
    "6. 닮음과 피타고라스": {
      "도형의 닮음": [
        {
          term: "닮음",
          definition: "한 도형을 일정한 비율로 확대하거나 축소한 도형이 다른 도형과 합동이 될 때의 관계",
          mnemonic: "닮음 = 모양은 완전히 똑같고 '크기만 축소/확대'된 관계",
          misconception: "두 닮은 도형의 넓이의 비는 닮음비와 같다 (X, 닮음비가 a:b이면 넓이의 비는 제곱인 a^2:b^2이 됩니다)",
          explanation: "각도는 똑같지만 변의 길이가 일정한 배율로 늘어나거나 줄어들어 비례 관계를 갖는 두 도형입니다."
        }
      ],
      "피타고라스 정리": [
        {
          term: "피타고라스 정리",
          definition: "직각삼각형에서 직각을 낀 두 변의 길이의 제곱의 합은 꼭 빗변의 길이의 제곱과 같음: a^2 + b^2 = c^2",
          mnemonic: "피타고라스 = 직각삼각형에서 '짧은 거 두 개 제곱 더하면 가장 긴 빗변 제곱'!",
          misconception: "모든 삼각형에서 a^2 + b^2 = c^2 이 성립한다 (X, 반드시 한 각이 90도인 '직각삼각형'에서만 성립합니다)",
          explanation: "직각삼각형의 세 변 사이에 성립하는 가장 강력한 기하학적 공식으로, 변의 길이를 구할 때 사용됩니다."
        }
      ]
    },
    "7. 확률": {
      "경우의 수": [
        {
          term: "합의 법칙",
          definition: "두 사건 A, B가 동시에 일어나지 않을 때, 사건 A 또는 사건 B가 일어나는 경우의 수는 각각의 경우의 수를 더해서 구함",
          mnemonic: "합의 법칙 = '또는(Or)'으로 연결되면 경우의 수를 '더하기'!",
          misconception: "언제나 두 경우의 수를 그냥 더하기만 하면 된다 (X, 혹시 겹치는(동시) 항목이 있다면 그만큼을 빼주어야 합니다)",
          explanation: "동시에 일어날 수 없는 독립적인 선택지가 주어졌을 때 총 가짓수를 합산하여 구하는 규칙입니다."
        },
        {
          term: "곱의 법칙",
          definition: "두 사건 A, B가 잇달아 또는 동시에 일어날 때, 사건 A와 사건 B가 일어나는 경우의 수는 각각의 경우의 수를 곱해서 구함",
          mnemonic: "곱의 법칙 = '그리고(And)', '이어서' 일어나면 경우의 수를 '곱하기'!",
          misconception: "동시에 일어나는 것만 곱한다 (X, 시간 차가 나더라도 연속적으로 일어나는 사건(주사위 던지고 동전 던지기 등)은 곱의 법칙을 씁니다)",
          explanation: "첫 번째 선택에 이어 연속해서 두 번째 선택을 연달아 하는 결합형 경우의 수를 구할 때 씁니다."
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
          misconception: "물은 쪼갤 수 없으므로 원소이다 (X, 물은 전기 분해를 통해 수소와 산소로 분해되므로 원소가 아닙니다)",
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
          definition: "특정 양이온과 음이온이 결합하여 물에 녹지 않고 가라앉는 물질",
          mnemonic: "앙금 = 물에 안 녹고 '앙' 버티며 가라앉는 '금'속성 고체",
          misconception: "모든 종류의 이온 결합은 앙금을 만든다 (X, 나트륨 이온(Na+), 칼륨 이온(K+), 질산 이온(NO3-) 등은 앙금을 만들지 않습니다)",
          explanation: "수용액 속의 특정 이온들이 만나 서로 강하게 결합하여 물 분자가 떼어내지 못하고 고체로 변해 밑으로 가라앉은 물질입니다."
        }
      ]
    },
    "2. 전기와 자기": {
      "마찰전기와 정전기 유도": [
        {
          term: "마찰전기",
          definition: "서로 다른 두 물체를 문지를 때 전자의 이동에 의해 발생하는 전기",
          mnemonic: "마찰전기 = '마'구 문질러서 전자를 이동시킨 '찰'진 전기!",
          misconception: "마찰하면 원자핵이 이동하여 전하를 띤다 (X, 무거운 원자핵은 고정되고 오직 가벼운 '전자'만 이동합니다)",
          explanation: "두 대전체가 문질러질 때 전자를 잃은 쪽은 플러스(+), 전자를 얻은 쪽은 마이너스(-) 전하를 띠게 됩니다."
        },
        {
          term: "정전기 유도",
          definition: "도체에 대전체를 가까이 가져갈 때, 도체 내부의 전자가 이동하여 전하가 쏠리는 현상",
          mnemonic: "정전기 유도 = 대전체를 가까이 대면 전자들이 알아서 '유도'되어 이동함",
          misconception: "정전기 유도가 일어나면 물체 전체의 총 전하량이 변한다 (X, 내부에서 전자들의 편중 현상만 발생할 뿐 총량은 같습니다)",
          explanation: "가까이 다가온 전하(+ 또는 -)를 피하거나 끌리기 위해 전자가 척력/인력으로 한쪽으로 밀려 도체가 대전되는 현상입니다."
        }
      ],
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
    },
    "3. 태양계": {
      "지구와 달의 운동": [
        {
          term: "지구의 자전",
          definition: "지구가 자전축을 중심으로 하루에 한 바퀴씩 서쪽에서 동쪽으로 회전하는 운동",
          mnemonic: "지구 자전 = 지구 혼자 '자'체적으로 하루에 1'전'(회전)!",
          misconception: "태양이 실제로 동쪽에서 서쪽으로 이동하는 것이다 (X, 지구가 서쪽에서 동쪽으로 돌기 때문에 태양이 움직이는 것처럼 보이는 겉보기 운동입니다)",
          explanation: "지구 스스로 매일 한 바퀴 도는 운동으로 인해 낮과 밤이 생기고 별과 태양이 하늘을 가로질러 가는 것처럼 보입니다."
        },
        {
          term: "지구의 공전",
          definition: "지구가 태양을 중심으로 1년에 한 바퀴씩 서쪽에서 동쪽으로 회전하는 운동",
          mnemonic: "지구 공전 = 태양 주위를 '공'동으로 1년에 1'전'!",
          misconception: "지구 공전 궤도는 완벽한 원이다 (X, 완벽한 원이 아니라 살짝 찌그러진 타원 궤도입니다)",
          explanation: "지구가 1년에 한 번씩 태양 주변을 도는 운동으로, 자전축 기울기와 결합해 사계절의 변화를 만듭니다."
        }
      ],
      "태양계의 행성": [
        {
          term: "지구형 행성",
          definition: "수성, 금성, 지구, 화성처럼 크기가 작고 단단한 암석으로 이루어진 밀도가 높은 행성",
          mnemonic: "지구형 행성 = '수금지화', 단단한 땅과 무거운 철로 이루어진 행성",
          misconception: "목성형 행성보다 크기가 훨씬 크다 (X, 지구형 행성은 목성형 행성에 비해 질량과 크기가 매우 작습니다)",
          explanation: "태양과 가까워 가벼운 기체 성분이 날아가고 무겁고 단단한 광물과 금속이 뭉쳐 만들어진 실체형 행성군입니다."
        },
        {
          term: "목성형 행성",
          definition: "목성, 토성, 천왕성, 해왕성처럼 가벼운 기체로 되어 있고 부피가 크며 밀도가 낮은 행성",
          mnemonic: "목성형 행성 = '목토천해', 기체 덩어리라 둥둥 뜨는 큰 행성",
          misconception: "목성형 행성은 단단한 표면이 있어 우주선이 착륙할 수 있다 (X, 주로 수소와 헬륨 기체로 이루어져 밟고 설 땅이 없습니다)",
          explanation: "태양과 멀어 얼음과 기체들이 많이 뭉쳤으며 고리와 수많은 위성을 갖춘 거대 가스 행성군입니다."
        }
      ]
    }
  },
  "국어": {
    "1. 문학과 표현": {
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
      ],
      "소설의 갈등 구조": [
        {
          term: "내적 갈등",
          definition: "한 인물의 마음속에서 서로 다른 두 가지 마음이나 욕구가 대립하여 일어나는 갈등",
          mnemonic: "내적 갈등 = 인물의 '마음 안(內)에'서 일어나는 생각 대립",
          misconception: "내적 갈등은 다른 사람과의 싸움으로 시작된다 (X, 오직 본인 내부의 고민, 죄책감, 선택의 기로 등에서만 발생합니다)",
          explanation: "인물이 결정을 내리지 못하고 내면에서 갈팡질팡 겪는 고민과 심리적인 다툼입니다."
        },
        {
          term: "외적 갈등",
          definition: "인물과 그를 둘러싼 외부 대상(타인, 사회, 운명, 자연) 사이에서 일어나는 대립과 마찰",
          mnemonic: "외적 갈등 = 인물의 '바깥(外)' 세계와 부딪치며 겪는 싸움",
          misconception: "외적 갈등의 유일한 원인은 개인 간의 다툼뿐이다 (X, 개인 대 사회 규칙, 개인 대 자연 재해, 개인 대 거역할 수 없는 운명 등도 모두 외적 갈등입니다)",
          explanation: "소설의 전개를 긴장감 넘치게 만드는 주인공과 외부 장애물 사이의 극적인 충돌 현상입니다."
        }
      ]
    }
  },
  "영어": {
    "1. Expressing Yourself": {
      "선호 및 제안 표현": [
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
      ],
      "핵심 관계대명사 문법": [
        {
          term: "주격 관계대명사",
          definition: "선행사가 사람일 때 who, 사물/동물일 때 which를 쓰며 관계사절 안에서 주어 역할을 함",
          mnemonic: "주격 관계대명사 = 선행사 뒤에 '주어 자리를 먹어치운' 연결 고리(who/which/that)",
          misconception: "주격 관계대명사 바로 뒤에는 항상 명사가 와야 한다 (X, 주격 관계대명사 자체가 주어이므로 바로 뒤에는 '동사'가 이어서 와야 합니다)",
          explanation: "앞의 명사를 수식하는 형용사절을 이끌며, 수식하는 절 내에서 명사(주어)의 생략된 역할을 대신 담당합니다."
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
          explanation: "처음으로 인류가 먹을 것을 자연에서 찾는 대신 직접 작물을 심고 가축을 기러 정착 주거를 시작한 문명적 대변혁입니다."
        },
        {
          term: "빗살무늬 토기",
          definition: "신석기 시대의 대표적인 토기로 밑이 뾰족하거나 둥글고 겉면에 빗살 모양 무늬가 있는 식량 저장 도구",
          mnemonic: "빗살무늬 토기 = '빗'으로 '살'며시 그은 것 같은 무늬의 저장용 진흙 그릇",
          misconception: "빗살무늬 토기의 밑이 뾰족한 이유는 서 있는 식탁에 올려놓기 위해서였다 (X, 강가나 바닷가 모래 또는 진흙땅에 꽂아 세워두기 좋게 만든 것임)",
          explanation: "진흙을 구워 만든 인류 최초의 화학적 발명품 중 하나로 식량 보관과 요리에 쓰였습니다."
        }
      ],
      "고조선과 삼국의 성립": [
        {
          term: "고조선",
          definition: "청동기 문화를 배경으로 건국된 한반도 역사상 최초의 국가 (단군조선)",
          mnemonic: "고조선 = 한반도의 '최초(고)' '조선' 왕국",
          misconception: "고조선은 철기 문화 기반으로 처음 세워졌다 (X, 처음 건국될 때는 청동기 기반이었으며 후기에 위만조선을 거치며 본격적으로 철기를 수용했습니다)",
          explanation: "단군의 건국 신화와 8조 법을 통해 당시의 홍익인간 사상과 농경 기반 사회 질서를 엿볼 수 있는 고대 국가입니다."
        },
        {
          term: "삼국 시대",
          definition: "고구려, 백제, 신라 세 나라가 고대 국가로 성장하여 한반도 주도권을 두고 경쟁한 시대",
          mnemonic: "삼국 시대 = 한반도를 삼분할한 세 나라(고구려, 백제, 신라)의 쟁탈전",
          misconception: "가야도 삼국 시대의 독립된 국가 연맹이었으므로 삼국 시대의 국가는 네 개이다 (X, 삼국 시대라고 칭하지만 연맹 단계에 머물러 중앙집권국가로 발전하지 못한 가야도 포함해 다룹니다)",
          explanation: "세 나라가 율령 반포, 불교 수용, 활발한 영토 확장을 통해 강력한 왕권 중심의 국가로 발전한 각축기입니다."
        }
      ]
    }
  }
};

// ============================================================================
// 2. State Management & Initialization (Safe Loading & Sanitizing)
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

  // 4. Setup Guidebook Expandable Toggle (Banner)
  setupGuidebookToggle();

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

  // Update Guidebook Banner Content if Expanded
  const expanded = document.getElementById('guidebook-expanded');
  if (expanded && expanded.style.display !== 'none') {
    updateGuidebookContent();
  }

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
// 7. Expandable Guidebook Banner (Dashboard)
// ============================================================================
function updateGuidebookContent() {
  const subject = appState.selectedSubject;
  const unit = appState.selectedUnit;
  const subunit = appState.selectedSubunit;
  const concepts = curriculumData[subject][unit][subunit];

  const grid = document.getElementById('guidebook-concepts-grid');
  grid.innerHTML = '';

  if (concepts) {
    concepts.forEach(c => {
      const card = document.createElement('div');
      card.className = 'expanded-concept-card';

      const title = document.createElement('h4');
      title.textContent = c.term;
      card.appendChild(title);

      const def = document.createElement('p');
      def.innerHTML = `<strong>정의:</strong> ${c.definition}`;
      card.appendChild(def);

      const exp = document.createElement('p');
      exp.innerHTML = `<strong>해설:</strong> ${c.explanation}`;
      card.appendChild(exp);

      const mnem = document.createElement('div');
      mnem.className = 'expanded-mnemonic';
      mnem.textContent = `💡 연상 공식: ${c.mnemonic}`;
      card.appendChild(mnem);

      grid.appendChild(card);
    });
  }
}

function setupGuidebookToggle() {
  const btn = document.getElementById('guidebook-btn');
  const expanded = document.getElementById('guidebook-expanded');
  const btnIcon = document.getElementById('guidebook-btn-icon');
  const btnText = document.getElementById('guidebook-btn-text');

  btn.addEventListener('click', () => {
    const isHidden = expanded.style.display === 'none';
    if (isHidden) {
      updateGuidebookContent();
      expanded.style.display = 'block';
      btn.classList.add('active');
      btnText.textContent = '안내 닫기';
      btnIcon.setAttribute('data-lucide', 'x');
    } else {
      expanded.style.display = 'none';
      btn.classList.remove('active');
      btnText.textContent = '학습 안내';
      btnIcon.setAttribute('data-lucide', 'book-open');
    }
    lucide.createIcons();
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

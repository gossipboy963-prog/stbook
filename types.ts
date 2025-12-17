export interface IndicatorContent {
  definition: string; // 1. 開宗明義
  marketBehavior: string; // 2. 市場在做什麼
  whenRising: string[]; // 3. 指標上升時
  whenFalling: string[]; // 4. 指標下降時
  divergence: string[]; // 5. 轉折/背離
  combinations: { // 6. 建議搭配
    indicators: string[];
    reason: string;
  };
  pitfalls: string[]; // 7. 容易騙你的時候
  usageInStep: { // 8. Step 1-7 用法
    role: 'Screening' | 'Confirmation' | 'Braking' | 'RiskControl' | 'Filter'; // 篩選/確認/煞車/風控
    description: string;
  };
  coachNote: string; // 交易者備忘
}

export interface IndicatorItem {
  id: string;
  title: string;
  stepId: string; // e.g., 'step-1'
  stepName: string; // e.g., 'Step 1 | 價量行為'
  tags: string[];
  content: IndicatorContent;
}

export interface StepCategory {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  items: IndicatorItem[];
}

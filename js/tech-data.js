/**
 * Fridge AI — 技術詳解數據庫 (Project Detail Data)
 * 此檔案存儲所有彈窗 (Modal) 顯示的技術細節、圖片路徑與 HTML 結構。
 */

const techData = {
  // ── YOLO 模型迭代 ──
  yolo: {
    label: 'MODEL ITERATION & PERFORMANCE',
    title: 'YOLOv11 系列訓練深度對比 (V3 vs V4)',
    html: `
      <div style="background:rgba(255,255,255,0.03); padding: 1.5rem; border-radius:1rem; margin-bottom: 1.5rem;">
        <h4 style="color:var(--gold); margin-bottom: 1rem; font-size: 1rem;">🚀 模型進化路徑：Nano → Small → Medium</h4>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div style="background:rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.05);">
            <div style="color:var(--gold); font-weight:700; font-size:0.8rem;">起點 — V1 (yolo11n)</div>
            <ul style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem; line-height:1.6;">
              <li>• 解析度: 640px | 訓練: 50 Epochs</li>
              <li>• mAP@50 ≈ 0.75–0.80</li>
              <li>• cabbage 辨識率僅 0.33，問題明顯</li>
            </ul>
          </div>
          <div style="background:rgba(34,197,94,0.05); padding: 1rem; border-radius: 0.5rem; border: 1px solid #22c55e55;">
            <div style="color:#22c55e; font-weight:700; font-size:0.8rem;">終點 — V6 (yolo11m) ✓</div>
            <ul style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem; line-height:1.6;">
              <li>• 解析度: 640px | 訓練: <b>300 Epochs</b></li>
              <li>• mAP@50 穩定收斂 <b>0.86–0.87</b></li>
              <li>• rotten_meat 辨識率達 <b>1.00</b> 🏆</li>
            </ul>
          </div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(3,1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="background:rgba(255,255,255,0.03); padding: 0.75rem; border-radius: 0.75rem; text-align:center;">
          <div style="font-size:1.4rem; font-weight:800; color:var(--gold);">6</div>
          <div style="font-size:0.7rem; color:var(--muted);">訓練迭代版本</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding: 0.75rem; border-radius: 0.75rem; text-align:center;">
          <div style="font-size:1.4rem; font-weight:800; color:#22c55e;">0.868</div>
          <div style="font-size:0.7rem; color:var(--muted);">最終 mAP@50</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding: 0.75rem; border-radius: 0.75rem; text-align:center;">
          <div style="font-size:1.4rem; font-weight:800; color:#3b82f6;">12</div>
          <div style="font-size:0.7rem; color:var(--muted);">食材辨識類別</div>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; text-align:center;">
        <button id="openChartModal" onclick="openChartDetail()"
          style="background: linear-gradient(135deg, rgba(194,156,109,0.15), rgba(194,156,109,0.05));
                 border: 1px solid var(--gold); color: var(--gold); padding: 0.75rem 2rem;
                 border-radius: 2rem; font-size: 0.85rem; font-weight: 600; cursor: pointer;
                 transition: all 0.3s; letter-spacing: 0.05em;">
          📊 查看詳細訓練數據 & 圖表
        </button>
        <p style="font-size:0.7rem; color:var(--muted); margin-top:0.75rem;">包含混淆矩陣、Loss 曲線、V1–V6 完整對照表</p>
      </div>

      <!-- NEW: ULTRA EVOLUTION PREVIEW -->
      <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0,255,136,0.03); border: 1px solid rgba(0,255,136,0.2); border-radius: 1.5rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1rem;">
          <span style="background:#00ff88; color:#000; font-size:0.6rem; font-weight:900; padding:0.2rem 0.5rem; border-radius:4px;">ULTRA DEV</span>
          <h4 style="color:#00ff88; font-size:0.9rem; margin:0;">專案進化：高效能推論指標 (Performance R&D)</h4>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; text-align:left;">
          <div style="background:rgba(255,255,255,0.02); padding:1rem; border-radius:0.75rem;">
            <div style="font-size:0.65rem; color:#888; margin-bottom:0.5rem;">DYNAMIC THRESHOLDING</div>
            <div style="height:4px; background:#333; border-radius:2px; overflow:hidden; margin-bottom:0.5rem;">
              <div style="width:85%; height:100%; background:#00ff88;"></div>
            </div>
            <p style="font-size:0.7rem; color:var(--muted);">透過開放靈敏度調節，將真實場景誤判率 (False Positives) 降低了 22%。</p>
          </div>
          <div style="background:rgba(255,255,255,0.02); padding:1rem; border-radius:0.75rem;">
            <div style="font-size:0.65rem; color:#888; margin-bottom:0.5rem;">INFERENCE LATENCY (ms)</div>
            <div style="font-size:0.8rem; color:#fff; font-family:monospace;">
              WASM: 120ms<br>
              WebGL: 45ms<br>
              <span style="color:#00ff88;">WebGPU: 18ms (ULTRA)</span>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ── Gemini 邏輯 ──
  gemini: {
    label: 'AI GENERATIVE LOGIC',
    title: 'Gemini 2.5 Flash 核心邏輯',
    html: `
      <div style="background:rgba(255,255,255,0.03); padding: 2rem; border-radius:1.5rem; margin-bottom: 1.5rem;">
        <p style="color:rgba(255,255,255,0.8); line-height:1.8;">將 YOLO 識別出的食材標籤與保鮮期數據，彙整為 Context Payload 並提交給 Gemini 進行「條件約束型生成」。</p>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
        <div style="border-left: 2px solid var(--blue); padding-left: 1rem;">
          <div style="font-weight:700; color:var(--blue); margin-bottom:0.5rem;">RAG 向量搜尋</div>
          <div style="font-size:0.8rem; color:var(--muted);">基於現有食材精確匹配推薦食譜，減少模型的幻覺 (Hallucination) 並精準過濾掉過期品。</div>
        </div>
        <div style="border-left: 2px solid #ef4444; padding-left: 1rem;">
          <div style="font-weight:700; color:#ef4444; margin-bottom:0.5rem;">AI 異常防護</div>
          <div style="font-size:0.8rem; color:var(--muted);">內建 Fallback 機制：若 API 請求失敗，系統自動降級切換至 IndexedDB 內的本地緩存與靜態食譜。</div>
        </div>
      </div>
    `
  },

  // ── 系統架構圖 ──
  arch: {
    label: 'SYSTEM ARCHITECTURE',
    title: 'Fridge AI 完整系統架構',
    html: `
      <div style="padding: 1rem; background:#000; border-radius:1rem; margin-bottom:1.5rem; text-align:center;">
        <div style="color:var(--gold); border: 1px solid var(--gold); padding:1rem; border-radius:0.5rem; display:inline-block; margin-bottom:1rem;">拍攝捕捉</div>
        <div style="color:rgba(255,255,255,0.2);">▼</div>
        <div style="color:#22c55e; border: 1px solid #22c55e; padding:1rem; border-radius:0.5rem; display:inline-block; margin-bottom:1rem;">YOLOv11 視覺推論 (新鮮度判別)</div>
        <div style="color:rgba(255,255,255,0.2);">▼</div>
        <div style="display:flex; justify-content:center; gap:2rem;">
          <div style="border:1px solid #3b82f6; color:#3b82f6; padding:1rem; border-radius:0.5rem;">數據持久化 (IndexedDB)</div>
          <div style="border:1px solid #a855f7; color:#a855f7; padding:1rem; border-radius:0.5rem;">動態提示詞 Prompt</div>
        </div>
        <div style="color:rgba(255,255,255,0.2); margin-top:1rem;">▼</div>
        <div style="background:var(--gold); color:#000; padding:1rem; border-radius:0.5rem; font-weight:800;">用戶終端 (食譜推薦/到期警示)</div>
      </div>
      <p style="font-size:0.85rem; color:var(--muted); text-align:center;">* 本架構實現了 100% 端到端的數據流轉，解決了家庭食材管理碎片化的痛點。</p>
    `
  },

  // ── 數據庫技術 ──
  db: {
    label: 'DATA PERSISTENCE',
    title: '數據持久化與加密管理',
    html: `
      <ul style="list-style:none; color:rgba(255,255,255,0.8); line-height:2;">
        <li>• <b>IndexedDB 存儲</b>：取代傳統 Session，支援大規模食材數據與歷史浪費統計的離線存取。</li>
        <li>• <b>時間戳賦予</b>：每一項入庫食材皆綁定唯一 Unix Timestamp 進行精確保鮮追蹤。</li>
        <li>• <b>分區邏輯</b>：自動將食材劃分至「冷藏/冷凍」區域，提供更真實的存放模擬。</li>
        <li>• <b>數據安全性</b>：採用的本地端存儲模式，確保用戶的隱私消費數據不出冰箱終端。</li>
      </ul>
    `
  },

  // ── 訓練框架 ──
  pytorch: {
    label: 'TRAINING FRAMEWORK',
    title: 'PyTorch 訓練與超參數設定',
    html: `
      <div style="background:rgba(255,255,255,0.02); padding:1.5rem; border-radius:1rem; font-family:monospace; font-size:0.85rem; color:var(--gold);">
        <p># 損失函數權重 (Loss Gain)</p>
        <p>box: 7.5 | cls: 3.0 | dfl: 1.5</p>
        <p style="margin-top:1rem; color:var(--muted);"># 硬體環境設定</p>
        <p>imgsz: 960 | batch: -1 | workers: 16</p>
      </div>
      <p style="margin-top:1.5rem; font-size:0.85rem; color:var(--muted);">基於 PyTorch 深度神經網絡，通過反向傳播持續優化邊界框回歸 (Bounding Box Regression) 的精準度。</p>
    `
  },

  // ── UI 樣式規範 ──
  tailwind: {
    label: 'UI ARCHITECTURE',
    title: 'Tailwind CSS 視覺規範',
    html: `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
        <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:0.75rem;">
          <strong style="color:var(--blue);">Glassmorphism</strong>
          <div style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem;">高飽和度模糊背景 (25px blur)，營造層次感。</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:0.75rem;">
          <strong style="color:var(--gold);">Fluid Grid</strong>
          <div style="font-size:0.75rem; color:var(--muted); margin-top:0.5rem;">響應式 12 欄位系統，完美適配桌機與手持設備。</div>
        </div>
      </div>
    `
  },

  // ── 前端框架 ──
  react: {
    label: 'FRONTEND STACK',
    title: 'React 18 + Vite 高效驅動',
    html: `
      <p style="color:rgba(255,255,255,0.8); line-height:1.8;">採用 <b>React 18 Concurrent Mode (併發模式)</b> 確保在大量辨識數據流下，介面依然維持 60 FPS 的流暢度。</p>
      <div style="margin-top:1rem; border:1px solid var(--border); padding:1rem; border-radius:0.75rem; font-size:0.8rem;">
        ⚡ <b>Vite HMR:</b> 0.3s 極速局部熱更新，縮短 50% 開發週期。
      </div>
    `
  },

  // ── 資料處理 ──
  dataset: {
    label: 'DATA PREPROCESSING',
    title: 'Roboflow 資料增強詳解',
    html: `
      <p style="margin-bottom:1rem; font-size:0.85rem; color:var(--gold);">為了解決採光不足與遮擋問題，我們設定了極高強度的 Data Augmentation (數據增廣)：</p>
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:0.5rem; font-family:monospace; font-size:0.75rem; color:rgba(255,255,255,0.6);">
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• hsv_h: 0.015 (色相)</div>
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• degrees: 15.0 (旋轉)</div>
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• translate: 0.2 (平移)</div>
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• mosaic: 1.0 (馬賽克拼接)</div>
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• flipud: 0.2 (垂直翻轉)</div>
        <div style="background:rgba(0,0,0,0.3); padding:0.5rem;">• mixup: 0.1 (圖像混疊)</div>
      </div>
      <p style="margin-top:1rem; font-size:0.8rem; color:var(--muted);">共獲取 5,560 組多樣化樣本，涵蓋強光、弱光與不同角度的食材切面。</p>
    `
  }
};

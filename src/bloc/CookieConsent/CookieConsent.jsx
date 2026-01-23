import React, { useEffect, useMemo, useState } from "react";

const CONSENT_KEY = "finex_cookie_consent_v1";

/**
 * consent shape:
 * {
 *   necessary: true,
 *   analytics: boolean,
 *   marketing: boolean,
 *   decidedAt: string ISO
 * }
 */

export function CookieConsent({
  policyUrl = "https://проф-экспертиза.рф/privacy",
  siteName = "https://проф-экспертиза.рф",
  onChange,
}) {
  const defaultConsent = useMemo(
    () => ({
      necessary: true,
      analytics: false,
      marketing: false,
      decidedAt: null,
    }),
    []
  );

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);
  const [draft, setDraft] = useState(defaultConsent);

  // localStorage.clear(); // на случай, если структура изменилась и нужно сбросить старые данные

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw);
      // минимальная валидация
      if (parsed && parsed.necessary === true && typeof parsed === "object") {
        setConsent(parsed);
        setDraft(parsed);
        setVisible(false);
        onChange?.(parsed);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, [defaultConsent, onChange]);

  function save(next) {
    const payload = {
      ...defaultConsent,
      ...next,
      necessary: true,
      decidedAt: new Date().toISOString(),
    };
    setConsent(payload);
    setDraft(payload);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    setVisible(false);
    setOpen(false);
    onChange?.(payload);
  }

  function acceptAll() {
    save({ analytics: true, marketing: true });
  }

  function acceptNecessary() {
    save({ analytics: false, marketing: false });
  }

  function openSettings() {
    setDraft(consent?.decidedAt ? consent : defaultConsent);
    setOpen(true);
  }

  function toggle(key) {
    if (key === "necessary") return;
    setDraft((p) => ({ ...p, [key]: !p[key] }));
  }

  if (!visible) return null;
  return (
    <>
      <div className="cookieBar uiCard">
        <div className="cookieBar__inner">
          <div className="cookieBar__row">
            <div style={{ display: "grid", gap: 6, maxWidth: 850 }}>
              <div className="uiTitle">Настройки cookies</div>
              <div className="uiText" >
                Мы используем cookies для корректной работы сайта. 
              </div>
            </div>

            <div className="cookieBar__actions">
              {/* Можно заменить на ваш .but */}
              {/* <button className="cookieBtnGhost" onClick={openSettings}>
                Настроить
              </button>
              <button className="but" onClick={acceptNecessary}>
                Только необходимые
              </button> */}
               <a href={policyUrl} className="but flex"  onClick={acceptAll}>
               Политика <br /> конфиденциальности
              </a>
              <button className="but" onClick={acceptAll}>
                Хорошо
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="uiModalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Настройки cookies"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="uiModal uiCard">
            <div className="uiModal__head">
              <div style={{ display: "grid", gap: 6 }}>
                <div className="uiTitle">Настройки cookies</div>
                <div className="uiText" style={{ textAlign: "left" }}>
                  Выберите категории cookies. Обязательные включены всегда.
                </div>
              </div>
              <button className="uiModal__close" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>

            <div className="cookieGrid">
              <div className="cookieOption">
                <div className="cookieOption__top">
                  <div className="cookieOption__name">Обязательные</div>
                  <div className="sw" data-on="true" aria-disabled="true">
                    <div className="sw__dot" />
                  </div>
                </div>
                <div className="cookieOption__desc">
                  Нужны для базовой работы сайта (навигация, формы, безопасность).
                  Отключить нельзя.
                </div>
              </div>

              <div className="cookieOption">
                <div className="cookieOption__top">
                  <div className="cookieOption__name">Аналитика</div>
                  <div
                    className="sw"
                    data-on={String(!!draft.analytics)}
                    role="switch"
                    aria-checked={!!draft.analytics}
                    tabIndex={0}
                    onClick={() => toggle("analytics")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle("analytics");
                    }}
                  >
                    <div className="sw__dot" />
                  </div>
                </div>
                <div className="cookieOption__desc">
                  Помогают понять, как пользователи взаимодействуют с сайтом, чтобы
                  улучшать страницы и контент.
                </div>
              </div>

              <div className="cookieOption">
                <div className="cookieOption__top">
                  <div className="cookieOption__name">Маркетинг</div>
                  <div
                    className="sw"
                    data-on={String(!!draft.marketing)}
                    role="switch"
                    aria-checked={!!draft.marketing}
                    tabIndex={0}
                    onClick={() => toggle("marketing")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle("marketing");
                    }}
                  >
                    <div className="sw__dot" />
                  </div>
                </div>
                <div className="cookieOption__desc">
                  Используются для персонализации предложений и оценки эффективности
                  рекламы (если она используется).
                </div>
              </div>
            </div>

            <div className="cookieModal__actions">
              <button className="cookieBtnGhost" onClick={acceptNecessary}>
                Отклонить необязательные
              </button>
              <button className="but" onClick={() => save(draft)}>
                Сохранить настройки
              </button>
              <button className="but" onClick={acceptAll}>
                Принять все
              </button>
            </div>

            {/* <div style={{ marginTop: 10 }} className="uiText">
              Также вы можете изменить выбор позже на странице{" "}
              <a className="uiLink" href={policyUrl}>
                {policyUrl}
              </a>
              .
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

/** утилита на случай, если понадобится кнопка "Сбросить cookies" */
export function resetCookieConsent() {
  localStorage.removeItem(CONSENT_KEY);
}

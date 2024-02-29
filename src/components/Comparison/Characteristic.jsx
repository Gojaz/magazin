import React from "react";

const Characteristic = () => {
  return (
    <div className="characteristic">
      <div className="characteristic__wrapper">
        <h2 className="characteristic__title">Сравнение характеристик</h2>
        <div className="characteristic__table">
          <div className="characteristic__item">
            <div className="characteristic__option">
              <span>Код производителя</span>
            </div>
            <div className="characteristic__value">
              <span>[C14-ICW300]</span>
            </div>
          </div>
          <div className="characteristic__item">
            <div className="characteristic__option">
              <span>Код производителя</span>
            </div>
            <div className="characteristic__value">
              <span>[C14-ICW300]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;

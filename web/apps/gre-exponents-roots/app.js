/* Exponents and Roots: laws of exponents, roots and scientific notation. */
(function () {
  'use strict';
  const NAMES = SK.QUANT_TOPICS.exp.concat(['qcSquare']);
  const LAWS = [['x^{a} × x^{b}', 'x^{a+b}'], ['x^{a} ÷ x^{b}', 'x^{a−b}'], ['(x^{a})^{b}', 'x^{ab}'], ['(xy)^{a}', 'x^{a}y^{a}'], ['x^{0}', '1 (x ≠ 0)'], ['x^{−a}', '1/x^{a}'], ['x^{1/2}', 'sqrt{x}'], ['sqrt{ab}', 'sqrt{a} × sqrt{b} (a, b ≥ 0)'], ['0 < x < 1', 'x^{2} < x < sqrt{x}'], ['x > 1', 'sqrt{x} < x < x^{2}']];
  const App = {
    about: 'Exponents and roots appear in algebra, comparisons and data questions. Practise the laws of exponents, simplifying roots, solving for an exponent and scientific notation, with generated questions and worked steps.',
    how: ['Learn the laws in **Laws**.', 'Practise in **Practice**.', 'Watch numbers between 0 and 1: their squares get smaller.'],
    tabs: [
      SK.quantTab('practice', 'Practice', NAMES),
      { id: 'laws', label: 'Laws', render(el) { el.appendChild(SK.card('Laws', SK.table(['Expression', 'Equals'], LAWS.map(([a, b]) => [SK.h('span', {}, SK.rich(a)), SK.h('span', {}, SK.rich(b))]), false))); } },
    ],
    checks: { 'generated sets are valid': (data, assert) => { for (let s = 1; s < 40; s++) for (const q of SK.makeQuant(NAMES, 10, s)) assert.deepEqual(SK.validateItem(q), []); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();

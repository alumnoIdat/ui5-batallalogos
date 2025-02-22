sap.ui.define(
  [
    'sap/trial/firevswatertrial/controller/Base.controller',
    'thirdparty/lodash/lodash',
    'thirdparty/moment/moment',
  ],
  (BaseController) => {
    return BaseController.extend('sap.trial.firevswatertrial.controller.Home', {
      onInit() {
        _.flatten(['1', ['2', '3'], ['4', '5', '6']]);
        moment().format('MMM Do YY');
      },

      /**
       * Press event handler for INTEGRTR logo
       */
      integrtrLogoPress() {
        window.open('https://www.integrtr.com', '_blank');
      },

      /**
       * Press event handler for GitHub logo
       */
      githubLogoPress() {
        window.open('https://github.com/integrtr/ui5-boilerplate', '_blank');
      },
    });
  }
);

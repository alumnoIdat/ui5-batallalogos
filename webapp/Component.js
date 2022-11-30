sap.ui.define(
  ['sap/ui/core/UIComponent', 'sap/ui/model/json/JSONModel'],
  (UIComponent, JSONModel) => {
    return UIComponent.extend('sap.trial.firevswatertrial.Component', {
      metadata: {
        manifest: 'json',
      },

      /**
       * The component is initialized by UI5 automatically during the
       * startup of the app and calls the init method once.
       * @public
       * @override
       */
      init() {
        // Initialize UI component
        // eslint-disable-next-line prefer-rest-params
        UIComponent.prototype.init.apply(this, arguments);

        // create the views based on the url/hash
        this.getRouter().initialize();

        // set UI model
        this.setModel(
          new JSONModel({
            fire: 0,
            water: 0,
          }),
          'UIModel'
        );
      },
    });
  }
);

System.register(["./components/importIO"], function (_export) {
  "use strict";

  var ImportIO, _prototypeProperties, _classCallCheck, ikeaBaseUrl, App;
  return {
    setters: [function (_componentsImportIO) {
      ImportIO = _componentsImportIO.ImportIO;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ikeaBaseUrl = "http://www.ikea.com/us/en/search/?category=products";
      App = _export("App", (function () {
        function App(ImportIO) {
          _classCallCheck(this, App);

          this.importIOClient = ImportIO;
          this.results = [];

          this.clientCredentials = {
            userGuid: "",
            apiKey: "",
            connectorGuid: ""
          };

          this.parameters = {
            query: "",
            min_price: 1,
            max_price: 10000,
            color: "",
            department: "",
            sorting: ""
          };

          this.colorValues = ["black", "blue", "brown", "gray", "green", "red", "white", "yellow", "other colors"];
          this.departmentValues = ["bathroom", "bedroom", "childrens_ikea", "cooking", "decoration", "dining", "eating", "food", "hallway"];
          this.sortingValues = ["name", "price", "newest"];
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [ImportIO];
            },
            writable: true,
            configurable: true
          }
        }, {
          getImageUrl: {
            value: function getImageUrl(url) {
              return url._value || url;
            },
            writable: true,
            configurable: true
          },
          buildParameter: {
            value: function buildParameter(parameterName, parameterValue) {
              if (typeof parameterValue !== "string") {
                parameterValue = parameterValue.toString();
              }

              if (parameterValue.trim() !== "") {
                return "&" + parameterName + "=" + parameterValue;
              }

              return "";
            },
            writable: true,
            configurable: true
          },
          buildIkeaUrl: {
            value: function buildIkeaUrl() {
              var url = ikeaBaseUrl;
              for (var param in this.parameters) {
                url += this.buildParameter(param, this.parameters[param]);
              }

              return url;
            },
            writable: true,
            configurable: true
          },
          go: {
            value: function go(e) {
              var self = this;
              e.preventDefault();

              if (!this.importIOClient.isInitialized) {
                this.importIOClient.init(this.clientCredentials.userGuid, this.clientCredentials.apiKey);
              }

              var url = this.buildIkeaUrl();

              this.importIOClient.query({ input: { "webpage/url": url }, connectorGuids: [this.clientCredentials.connectorGuid], asObjects: true }).then(function (result) {
                self.results = result;console.log(result);
              }, function (error) {
                console.log(error);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVaLFdBQVcsRUFFRixHQUFHOzs7QUFKUixjQUFRLHVCQUFSLFFBQVE7Ozs7Ozs7QUFFWixpQkFBVyxHQUFHLHFEQUFxRDtBQUUxRCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLFFBQVE7Z0NBRlQsR0FBRzs7QUFHWixjQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztBQUMvQixjQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsY0FBSSxDQUFDLGlCQUFpQixHQUFHO0FBQ3ZCLG9CQUFRLEVBQUUsRUFBRTtBQUNaLGtCQUFNLEVBQUUsRUFBRTtBQUNWLHlCQUFhLEVBQUUsRUFBRTtXQUNsQixDQUFDOztBQUVGLGNBQUksQ0FBQyxVQUFVLEdBQUc7QUFDaEIsaUJBQUssRUFBRSxFQUFFO0FBQ1QscUJBQVMsRUFBRSxDQUFDO0FBQ1oscUJBQVMsRUFBRSxLQUFLO0FBQ2hCLGlCQUFLLEVBQUUsRUFBRTtBQUNULHNCQUFVLEVBQUUsRUFBRTtBQUNkLG1CQUFPLEVBQUUsRUFBRTtXQUNaLENBQUM7O0FBRUYsY0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDekcsY0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2xJLGNBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEOzs2QkF4QlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFFOzs7OztBQXlCdEMscUJBQVc7bUJBQUEscUJBQUMsR0FBRyxFQUFFO0FBQ2YscUJBQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7YUFDMUI7Ozs7QUFFRCx3QkFBYzttQkFBQSx3QkFBQyxhQUFhLEVBQUUsY0FBYyxFQUFFO0FBQzVDLGtCQUFHLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtBQUNyQyw4QkFBYyxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztlQUM1Qzs7QUFFRCxrQkFBRyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQy9CLHVCQUFPLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQztlQUNuRDs7QUFFRCxxQkFBTyxFQUFFLENBQUM7YUFDWDs7OztBQUVELHNCQUFZO21CQUFBLHdCQUFHO0FBQ2Isa0JBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQztBQUN0QixtQkFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2hDLG1CQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2VBQzNEOztBQUVELHFCQUFPLEdBQUcsQ0FBQzthQUNaOzs7O0FBRUQsWUFBRTttQkFBQSxZQUFDLENBQUMsRUFBRTtBQUNKLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZUFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUVuQixrQkFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO0FBQ3JDLG9CQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztlQUMxRjs7QUFFRCxrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztBQUU5QixrQkFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLEVBQUMsY0FBYyxFQUFFLENBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNsSSxJQUFJLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDZCxvQkFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQzVDLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFBRSx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztlQUFFLENBQUMsQ0FBQzthQUN4Qzs7Ozs7O2VBakVVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
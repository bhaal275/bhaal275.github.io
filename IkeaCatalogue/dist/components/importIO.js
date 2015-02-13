System.register(["./importIOFactory"], function (_export) {
  "use strict";

  var ImportIOFactory, _prototypeProperties, _classCallCheck, ImportIO;
  return {
    setters: [function (_importIOFactory) {
      ImportIOFactory = _importIOFactory.ImportIOFactory;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ImportIO = _export("ImportIO", (function () {
        function ImportIO(ImportIOFactory) {
          _classCallCheck(this, ImportIO);

          this.importIO = ImportIOFactory;
          this.client = undefined;
        }

        _prototypeProperties(ImportIO, {
          inject: {
            value: function inject() {
              return [ImportIOFactory];
            },
            writable: true,
            configurable: true
          }
        }, {
          init: {
            value: function init(userGuid, apiKey) {
              this.client = new this.importIO.importIOConstructor(userGuid, apiKey, "import.io");
            },
            writable: true,
            configurable: true
          },
          isInitialized: {
            get: function () {
              return this.client !== undefined;
            },
            configurable: true
          },
          connect: {
            value: function connect() {
              var self = this;

              return new Promise(function (resolve, reject) {
                self.client.connect(function (connected) {
                  if (!connected) {
                    reject("Unable to connect");
                    return;
                  }

                  resolve(connected);
                });
              });
            },
            writable: true,
            configurable: true
          },
          query: {
            value: function query(queryObject) {
              var self = this;

              return this.connect().then(function () {
                return new Promise(function (resolve, reject) {
                  var data = [];

                  var callback = function (finished, message) {
                    if (message.type == "DISCONNECT") {
                      reject("The query was cancelled as the client was disconnected");
                    }
                    if (message.type == "MESSAGE") {
                      if (message.data.hasOwnProperty("errorType")) {
                        reject("Got an error!", message.data);
                      } else {
                        data = data.concat(message.data.results);
                      }
                    }
                    if (finished) {
                      resolve(data);
                    }
                  };

                  self.client.query(queryObject, callback);
                });
              });
            },
            writable: true,
            configurable: true
          }
        });

        return ImportIO;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1wb3J0SU8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsZUFBZSx5Q0FHVixRQUFROzs7QUFIYixxQkFBZSxvQkFBZixlQUFlOzs7Ozs7O0FBR1YsY0FBUTtBQUVSLGlCQUZBLFFBQVEsQ0FFUCxlQUFlO2dDQUZoQixRQUFROztBQUdqQixjQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxjQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6Qjs7NkJBTFUsUUFBUTtBQUNaLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUFFOzs7OztBQU03QyxjQUFJO21CQUFBLGNBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUNyQixrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNwRjs7OztBQUVHLHVCQUFhO2lCQUFBLFlBQUc7QUFDbEIscUJBQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7YUFDbEM7OztBQUVELGlCQUFPO21CQUFBLG1CQUFHO0FBQ1Isa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLG9CQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUMvQixzQkFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLDBCQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM1QiwyQkFBTzttQkFDUjs7QUFFRCx5QkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNwQixDQUFDLENBQUM7ZUFDSixDQUFDLENBQUM7YUFDSjs7OztBQUVELGVBQUs7bUJBQUEsZUFBQyxXQUFXLEVBQUU7QUFDakIsa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIscUJBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ3JDLHVCQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUc1QyxzQkFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDOztBQUVkLHNCQUFJLFFBQVEsR0FBRyxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFFekMsd0JBQUksT0FBTyxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7QUFDaEMsNEJBQU0sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO3FCQUNsRTtBQUVELHdCQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO0FBQzdCLDBCQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBRTVDLDhCQUFNLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt1QkFDdkMsTUFBTTtBQUVMLDRCQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3VCQUMxQztxQkFDRjtBQUNELHdCQUFJLFFBQVEsRUFBRTtBQUVaLDZCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7bUJBQ0YsQ0FBQzs7QUFLRixzQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQyxDQUFDLENBQUM7ZUFDSixDQUFDLENBQUM7YUFDSjs7Ozs7O2VBbEVVLFFBQVEiLCJmaWxlIjoiY29tcG9uZW50cy9pbXBvcnRJTy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
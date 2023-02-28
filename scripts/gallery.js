var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
"use strict";
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
var actualImg = $$(".img__box--gif");
var description = $$(".img__box--desc");
var leftP = $$(".leftP");
var rightP = $$(".rightP");
var buttons = $$$("button");
var imagesArray = [];
var getImagesData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('./scripts/images.json')];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                imagesArray = data.images;
                return [2 /*return*/, imagesArray];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching data: ".concat(error_1));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getImagesData().then(function () {
    var mappedArray = imagesArray.map(function (image, index) {
        return __assign(__assign({}, image), { id: index });
    });
    console.log(mappedArray);
    var currentGif = 0;
    actualImg.setAttribute("src", mappedArray[currentGif].src);
    actualImg.setAttribute("alt", mappedArray[currentGif].alt);
    description.innerHTML = mappedArray[currentGif].alt;
    var loadPhoto = function (photoNumber) {
        actualImg.setAttribute("src", mappedArray[photoNumber].src);
        actualImg.setAttribute("alt", mappedArray[photoNumber].alt);
        description.innerHTML = mappedArray[photoNumber].alt;
        buttons.forEach(function (btn, i) {
            if (i !== photoNumber) {
                btn.classList.remove("clicked");
            }
            else {
                btn.classList.add("clicked");
            }
        });
    };
    buttons.forEach(function (button, index) {
        button.setAttribute("data-number", index);
        button.innerHTML = "<img src=\"".concat(mappedArray[index].src, "\" alt=\"").concat(mappedArray[index].alt, "\" />");
        button.addEventListener("click", function () {
            currentGif = index;
            loadPhoto(currentGif);
        });
    });
    rightP.addEventListener('click', function () {
        currentGif = (currentGif + 1) % mappedArray.length;
        loadPhoto(currentGif);
    });
    leftP.addEventListener("click", function () {
        if (currentGif > 0) {
            currentGif--;
        }
        else {
            currentGif = mappedArray.length - 1;
        }
        loadPhoto(currentGif);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkE2RUc7QUE3RUgsWUFBWSxDQUFDO0FBRWIsSUFBTSxDQUFDLEdBQUcsVUFBQyxFQUFFLElBQUssT0FBQSxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUEzQixDQUEyQixDQUFDO0FBQzlDLElBQU0sRUFBRSxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztBQUNwRCxJQUFNLEdBQUcsR0FBRyxVQUFDLE1BQU0sSUFBSyxPQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztBQUUxRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2QyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0IsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU5QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFFckIsSUFBTSxhQUFhLEdBQUc7Ozs7OztnQkFFRCxxQkFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsRUFBQTs7Z0JBQS9DLFFBQVEsR0FBRyxTQUFvQztnQkFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ1kscUJBQU0sUUFBUSxDQUFD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
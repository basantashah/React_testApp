'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Prices = require('../components/Prices');

var _Prices2 = _interopRequireDefault(_Prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/basanta/exchange/exchange_test/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { 'class': 'jumbotron', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'PayHQ'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('small', { 'class': 'text-muted', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, ' The exchange for cyrpto lovers ')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('ul', { 'class': 'nav nav-tabs', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('li', { 'class': 'nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { 'class': 'nav-link active', 'data-toggle': 'tab', href: '#bandtradesetting', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, ' Brand Trade Setting')), _react2.default.createElement('li', { 'class': 'nav-item', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { 'class': 'nav-link active', 'data-toggle': 'tab', href: '#pricefeeds', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, ' Price Feeds'))), _react2.default.createElement('div', { id: 'myTabContent', 'class': 'tab-content', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('div', { 'class': 'tab-pane fade active show', id: 'bandtradesetting', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { 'class': 'row mt-4', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('div', { 'class': 'col-sm-6', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('form', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('fieldset', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('div', { 'class': 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('select', { 'class': 'form-control', id: 'conversion', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'ETH -> USDr'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'USDr -> ETH'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'BTC -> USDr'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'USDr -> BTC'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'BTC -> ETH'))))), _react2.default.createElement('form', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('fieldset', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', { 'class': 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('select', { 'class': 'form-control', id: 'conversion', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'Band #1'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'Band #2'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, 'Band #3'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'Band #4'), _react2.default.createElement('option', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Band #5')))))), _react2.default.createElement('div', { 'class': 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('label', { 'class': 'col-form-label', 'for': 'inputDefault', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Price over feed average: '), _react2.default.createElement('input', { 'class': 'form-control', placeholder: 'Default input', id: 'inputDefault', type: 'text', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }))), _react2.default.createElement('div', { 'class': 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('label', { 'class': 'col-form-label', 'for': 'inputDefault', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'your profit Band #1: '), _react2.default.createElement('input', { 'class': 'form-control', placeholder: 'Default input', id: 'inputDefault', type: 'text', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }))), _react2.default.createElement('div', { 'class': 'form-group', __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('label', { 'class': 'col-form-label', 'for': 'inputDefault', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'ETH in Band #1: '), _react2.default.createElement('input', { 'class': 'form-control', placeholder: 'Default input', id: 'inputDefault', type: 'text', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }))), _react2.default.createElement('button', { type: 'submit', 'class': 'btn btn-primary', onclick: 'showInput();', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'Save')), _react2.default.createElement('div', { 'class': 'col-sm-6', __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, ' Feed USDr price per ETH: '), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, ' over feed: ')))), _react2.default.createElement('div', { 'class': 'tab-pane fade', id: 'pricefeeds', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, ' here will be the Price Feeds'), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, ' hello ')))), _react2.default.createElement(_Prices2.default, { bpi: props.bpi, __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            bpi: data.bpi
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZldGNoIiwiTGF5b3V0IiwiUHJpY2VzIiwiSW5kZXgiLCJwcm9wcyIsImJwaSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxTQUFMLEFBQWE7Z0JBQWI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFHO0FBQUg7QUFBQSxxQkFBRyxjQUFBLFdBQU8sU0FBUCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGTCxBQUVFLEFBQUcsQUFFSDs7Z0JBQUE7a0JBSkYsQUFJRSxBQUtGO0FBTEU7QUFBQSxzQkFLRixjQUFBLFFBQUksU0FBSixBQUFVO2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksU0FBSixBQUFVO2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsU0FBSCxBQUFTLG1CQUFrQixlQUEzQixBQUF3QyxPQUFNLE1BQTlDLEFBQW1EO2dCQUFuRDtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsMENBQUEsY0FBQSxRQUFJLFNBQUosQUFBVTtnQkFBVjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFNBQUgsQUFBUyxtQkFBa0IsZUFBM0IsQUFBd0MsT0FBTSxNQUE5QyxBQUFtRDtnQkFBbkQ7a0JBQUE7QUFBQTtLQWRKLEFBU0EsQUFJRSxBQUNFLEFBS0YsbUNB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a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxTQUFMLEFBQWE7Z0JBQWI7a0JBQUEsQUFDQTtBQURBO3FCQUNBLGNBQUEsV0FBTyxTQUFQLEFBQWEsa0JBQWlCLE9BQTlCLEFBQW1DO2dCQUFuQztrQkFBQTtBQUFBO0tBREEsQUFDQSxBQUNBLDhEQUFPLFNBQVAsQUFBYSxnQkFBZSxhQUE1QixBQUF3QyxpQkFBZ0IsSUFBeEQsQUFBMkQsZ0JBQWUsTUFBMUUsQUFBK0U7Z0JBQS9FO2tCQTVDSixBQXlDRSxBQUNFLEFBRUEsQUFHRjtBQUhFO3dCQUdGLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxTQUF0QixBQUE0QixtQkFBa0IsU0FBOUMsQUFBc0Q7Z0JBQXREO2tCQUFBO0FBQUE7S0FoREosQUFDRSxBQStDRSxBQUdGLDBCQUFBLGNBQUEsU0FBSyxTQUFMLEFBQWE7Z0JBQWI7a0JBQUEsQUFDQztBQUREO3FCQUNDLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURELEFBQ0MsQUFDRSwrQ0FBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0F2RFAsQUFDRSxBQUNBLEFBbURFLEFBRUcsQUFLTCxvQ0FBQSxjQUFBLFNBQUssU0FBTCxBQUFXLGlCQUFnQixJQUEzQixBQUE4QjtnQkFBOUI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxrREFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FsRlIsQUFDRSxBQW1CRSxBQTRERSxBQUVFLEFBSUosK0JBQUEsQUFBQyxrQ0FBTyxLQUFLLE1BQWIsQUFBbUI7Z0JBQW5CO2tCQXZGUSxBQUNaLEFBc0ZJO0FBQUE7O0FBdkZOOztBQTRGQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1dBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNKLE1BREksQUFDSixBQUFNOzthQUFsQjtBQURnQix5QkFBQTswQkFBQTtpQkFFSCxJQUZHLEFBRUgsQUFBSTs7YUFBakI7QUFGZ0IsMEJBQUE7O2lCQUtmLEtBTGUsQUFJZixBQUNLO0FBREwsQUFDTDs7YUFMb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYmFzYW50YS9leGNoYW5nZS9leGNoYW5nZV90ZXN0In0=
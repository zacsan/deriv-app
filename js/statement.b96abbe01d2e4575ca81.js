(window.webpackJsonp=window.webpackJsonp||[]).push([["statement"],{583:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(0),i=n.n(r),l=n(3),c=n(183),s=n(34),u=n(5),p=n.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=function(e){var t=e.className,n=d(e,["className"]);return i.a.createElement("svg",f({className:p()("inline-icon",t),width:"16",height:"16",viewBox:"0 0 16 16"},n),i.a.createElement("g",{fill:"#7F8397",fillRule:"nonzero"},i.a.createElement("path",{className:"color1-fill",d:"M4 3H2v11h12V3h-2v.5a.5.5 0 1 1-1 0V3H5v.5a.5.5 0 0 1-1 0V3zm1-1h6v-.5a.5.5 0 1 1 1 0V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2zM2 5h12v1H2V5z"}),i.a.createElement("path",{className:"color1-fill",d:"M10.134 9H4.5a.5.5 0 0 1 0-1h5.634a1 1 0 1 1 0 1zM4 11h7.5a.5.5 0 1 1 0 1H4v-1z"})))};m.propTypes={className:o.a.string,classNamePath:o.a.string,onClick:o.a.func};var h=m,y=n(4),b=function(e){var t=e.onClick,n=e.is_active,a=e.children;return i.a.createElement("li",{className:p()({"composite-calendar__prepopulated-list--is-active":n}),onClick:t},a)};b.propTypes={children:o.a.oneOfType([o.a.func,o.a.node,o.a.array]),is_active:o.a.bool,onClick:o.a.func};var _=b;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=function(e){var t=e.items,n=e.from,a=e.to;return i.a.createElement("ul",{className:"composite-calendar__prepopulated-list"},t.map(function(e){var t=e.duration,o=O(e,["duration"]),r=function(e,t,n){return 0===n?Object(y.w)().endOf("day").unix()===t&&null===e:Math.ceil(t/86400)-Math.ceil(e/86400)===n}(n,a,t);return i.a.createElement(_,v({key:t,is_active:r},o))}))};g.propTypes={items:o.a.array};var w=g;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=C(t).call(this,e),(n=!o||"object"!==j(o)&&"function"!=typeof o?D(a):o).state={show_to:!1,show_from:!1,list:[{children:Object(l.localize)("All time"),onClick:function(){return n.selectDateRange(0)},duration:0},{children:Object(l.localize)("Last 7 days"),onClick:function(){return n.selectDateRange(7)},duration:7},{children:Object(l.localize)("Last 30 days"),onClick:function(){return n.selectDateRange(30)},duration:30},{children:Object(l.localize)("Last 60 days"),onClick:function(){return n.selectDateRange(60)},duration:60},{children:Object(l.localize)("Last quarter"),onClick:function(){return n.selectDateRange(90)},duration:90}]},n.setWrapperRef=n.setWrapperRef.bind(D(n)),n.handleClickOutside=n.handleClickOutside.bind(D(n)),n}var a,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,i.a.PureComponent),a=t,(o=[{key:"selectDateRange",value:function(e){this.hideCalendar(),this.applyBatch({from:e?Object(y.w)().startOf("day").subtract(e,"day").add(1,"s").unix():null,to:Object(y.w)().endOf("day").unix()})}},{key:"hideCalendar",value:function(){this.setState({show_from:!1,show_to:!1})}},{key:"showCalendar",value:function(e){this.setState(k({},"show_".concat(e),!0))}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&(e.stopPropagation(),e.preventDefault(),this.hideCalendar())}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setToDate",value:function(e){this.updateState("to",Object(y.g)(e).endOf("day").unix())}},{key:"setFromDate",value:function(e){this.updateState("from",e)}},{key:"updateState",value:function(e,t){this.apply(e,t)}},{key:"applyBatch",value:function(e){this.props.onChange(e)}},{key:"apply",value:function(e,t){this.applyBatch(k({},e,t))}},{key:"isPeriodDisabledTo",value:function(e){return e+1<=this.props.from||e>Object(y.w)().endOf("day").unix()}},{key:"isPeriodDisabledFrom",value:function(e){return e-1>=this.props.to}},{key:"render",value:function(){var e=this.state,t=e.show_from,a=e.show_to,o=e.list,r=this.props,u=r.to,p=r.from;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"dt_composite_calendar_inputs",className:"composite-calendar__input-fields"},i.a.createElement(c.a,{id:"dt_calendar_input_from",is_read_only:!0,placeholder:Object(l.localize)("Date from"),icon:h,onClick:this.showCalendar.bind(this,"from"),value:this.from_date_label}),i.a.createElement(c.a,{id:"dt_calendar_input_to",is_read_only:!0,placeholder:Object(l.localize)("Date to"),icon:h,onClick:this.showCalendar.bind(this,"to"),value:this.to_date_label})),a&&i.a.createElement("div",{className:"composite-calendar",ref:this.setWrapperRef},i.a.createElement(w,{from:p,to:u,items:o}),i.a.createElement(s.a,{ctor:function(){return n.e("two-month-picker").then(n.bind(null,601))},should_load:!0,has_progress:!1,value:u,onChange:this.setToDate.bind(this),isPeriodDisabled:this.isPeriodDisabledTo.bind(this)})),t&&i.a.createElement("div",{className:"composite-calendar",ref:this.setWrapperRef},i.a.createElement(w,{from:p,to:u,items:o}),i.a.createElement(s.a,{ctor:function(){return n.e("two-month-picker").then(n.bind(null,601))},should_load:!0,has_progress:!1,value:p,onChange:this.setFromDate.bind(this),isPeriodDisabled:this.isPeriodDisabledFrom.bind(this)})))}},{key:"to_date_label",get:function(){var e=Object(y.g)(this.props.to);return 0===Object(y.e)(e)?Object(l.localize)("Today"):e.format("MMM, DD YYYY")}},{key:"from_date_label",get:function(){var e=Object(y.g)(this.props.from);return this.props.from?e.format("MMM, DD YYYY"):""}}])&&E(a.prototype,o),r&&E(a,r),t}();S.propTypes={from:o.a.number,onChange:o.a.func,to:o.a.number};t.a=S},599:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(1),r=n.n(o),i=n(0),l=n.n(i),c=n(33),s=n(3),u=n(31),p=n(588),f=n(19),d=n(583),m=n(94),h=n(182),y=n(28),b=n(11),_=n(587),v=n(589),O=n(586),g=n(585),w=n(181),j=n.n(w);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=C(this,(e=D(t)).call.apply(e,[this].concat(o)))).getRowAction=function(e){var t;return e.id&&["buy","sell"].includes(e.action_type)?t=Object(y.c)()[j.a.extractInfoFromShortcode(e.shortcode).category.toUpperCase()]?Object(m.b)(e.id):{component:l.a.createElement(f.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.",values:{website_name:h.b},components:[l.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:Object(u.urlFor)("user/statementws",void 0,void 0,!0)})]})}:["deposit","withdrawal"].includes(e.action_type)&&(t={message:e.desc}),t},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,l.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this,t=this.props,n=t.component_icon,a=t.currency,o=t.data,r=t.date_from,i=t.date_to,c=t.is_empty,u=t.is_loading,f=t.error,m=t.handleScroll,h=t.handleDateChange,y=t.has_selected_date;if(f)return l.a.createElement("p",null,f);var b=Object(_.c)(a),w=l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{onChange:h,from:r,to:i}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{i18n_heading:Object(s.localize)("Statement"),i18n_message:Object(s.localize)("View all transactions on your account, including trades, deposits, and withdrawals."),filter_component:w}),u&&0===o.length||c?l.a.createElement(v.a,{is_loading:u,has_selected_date:y,is_empty:c,empty_message_component:g.a,component_icon:n,localized_message:Object(s.localize)("You have no transactions yet."),localized_period_message:Object(s.localize)("You have no transactions for this period.")}):l.a.createElement(p.a,{className:"statement",data_source:o,columns:b,onScroll:m,getRowAction:function(t){return e.getRowAction(t)},is_empty:c},l.a.createElement(v.a,{is_loading:u})))}}])&&E(n.prototype,a),o&&E(n,o),t}();S.propTypes={component_icon:r.a.string,data:a.PropTypes.arrayOrObservableArray,date_from:r.a.number,date_to:r.a.number,error:r.a.string,handleScroll:r.a.func,has_selected_date:r.a.bool,history:r.a.object,is_empty:r.a.bool,is_loading:r.a.bool,onMount:r.a.func,onUnmount:r.a.func},t.default=Object(b.b)(function(e){var t=e.modules;return{currency:e.client.currency,date_from:t.statement.date_from,date_to:t.statement.date_to,data:t.statement.data,error:t.statement.error,handleScroll:t.statement.handleScroll,handleDateChange:t.statement.handleDateChange,has_selected_date:t.statement.has_selected_date,is_empty:t.statement.is_empty,is_loading:t.statement.is_loading,onMount:t.statement.onMount,onUnmount:t.statement.onUnmount}})(Object(c.g)(S))}}]);
//# sourceMappingURL=statement.b96abbe01d2e4575ca81.js.map
/*!
 * Библиотека JavaScript jQuery версии 3.0.0
 * https://jquery.com/
 *
 * Включает Sizzle.js
 * https://sizzlejs.com/
 *
 * Авторские права принадлежат jQuery Foundation и другим участникам проекта.
 * Распространяется под лицензией MIT
 * https://jquery.org/license
 *
 * Дата: 2016-06-09T18:02Z
 */
(function(global, factory) {

	"использовать строгий режим";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// Для CommonJS и подобных ему сред, где используется корректный `window`
		// Если присутствует, выполните фабрику и получите jQuery.
		// Для сред, в которых нет окна с документом
		// (например, в Node.js) предоставьте фабрику в виде module.exports.
		// Это подчеркивает необходимость создания настоящего «окна».
		// например, var jQuery = require("jquery")(window);
		// Дополнительную информацию см. в заявке № 14549.
		module.exports = global.document ?
			factory( global, true ) :
			функция( w ) {
				if ( !w.document ) {
					throw new Error("jQuery требует наличия окна с документом");
				}
				return factory( w );
			};
	} еще {
		фабрика( глобальная );
	}

// Передайте это, если окно еще не определено
}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// Генерировать исключения, когда нестрогий код (например, ASP.NET 4.5) обращается к строгому режиму.
// arguments.callee.caller (trac-13335). Но начиная с jQuery 3.0 (2016), строгий режим должен быть распространенным.
// достаточно того, чтобы все подобные попытки были защищены блоком try.
"использовать строгий режим";

var arr = [];

var document = window.document;

вар getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

вар toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

вар fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


вар
	версия = "3.0.0",

	// Определяем локальную копию jQuery
	jQuery = function( selector, context ) {

		// Объект jQuery на самом деле представляет собой просто расширенный конструктор инициализации.
		// Инициализация необходима, если вызывается jQuery (если она не включена, допускается выдача ошибки).
		return new jQuery.fn.init( selector, context );
	},

	// Поддержка: только для Android <=4.0
	// Убедитесь, что мы обрезали BOM и NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Сопоставляет пунктирную строку для преобразования в верблюжий текст
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g,

	// Используется jQuery.camelCase в качестве функции обратного вызова для replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// Текущая используемая версия jQuery
	jQuery: версия,

	конструктор: jQuery,

	// Длина объекта jQuery по умолчанию равна 0
	длина: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Получить N-й элемент в найденном наборе элементов ИЛИ
	// Получаем весь набор совпадающих элементов в виде чистого массива
	получить: функция( num ) {
		return num != null ?

			// Возвращает только один элемент из множества
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Возвращает все элементы в чистом массиве
			slice.call( this );
	},

	// Берём массив элементов и помещаем его в стек
	// (возвращает новый набор найденных элементов)
	pushStack: function( elems ) {

		// Создаем новый набор соответствующих элементов jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Добавляем старый объект в стек (в качестве ссылки)
		ret.prevObject = this;

		// Возвращает вновь сформированный набор элементов
		return ret;
	},

	// Выполнить функцию обратного вызова для каждого элемента в найденном наборе.
	каждый: функция(обратный вызов) {
		return jQuery.each(this, callback);
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	первый: функция() {
		return this.eq( 0 );
	},

	последний: функция() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	конец: функция() {
		return this.prevObject || this.constructor();
	},

	// Только для внутреннего использования.
	// Ведет себя как метод массива, а не как метод jQuery.
	толкнуть: толкнуть,
	сортировка: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		длина = аргументы.длина,
		deep = false;

	// Обработка ситуации глубокого копирования
	if (typeof target === "boolean") {
		глубина = цель;

		// Пропускаем логическое значение и целевое значение
		target = arguments[ i ] || {};
		i++;
	}

	// Обработка случая, когда целевой объект является строкой или чем-то подобным (возможно при глубоком копировании)
	if (typeof target !== "object" && !jQuery.isFunction(target)) {
		target = {};
	}

	// Расширяем сам jQuery, если передан только один аргумент
	если (i === длина) {
		цель = это;
		я--;
	}

	for ( ; i < length; i++ ) {

		// Обрабатывать только ненулевые/неопределенные значения
		если ( ( options = arguments[ i ] ) != null ) {

			// Расширить базовый объект
			для (имя в параметрах) {
				src = target[ name ];
				copy = options[ name ];

				// Предотвращение бесконечного цикла
				если (target === copy) {
					продолжать;
				}

				// Выполняем рекурсивный вызов, если объединяем обычные объекты или массивы.
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} еще {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Никогда не перемещайте исходные объекты, клонируйте их.
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Не используйте неопределенные значения
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Возвращает измененный объект
	возвращаемый целевой объект;
};

jQuery.extend( {

	// Уникальный для каждой копии jQuery на странице
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Предполагается, что jQuery готов без модуля ready.
	isReady: true,

	ошибка: функция( msg ) {
		throw new Error(msg);
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// Начиная с jQuery 3.0, функция isNumeric ограничена следующими параметрами:
		// строки и числа (примитивы или объекты)
		// которые можно преобразовать в конечные числа (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs с числовым преобразованием ложных срабатываний ("")
			// ...но неправильно интерпретирует строки с ведущими числами, в частности шестнадцатеричные литералы ("0x...")
			// Вычитание преобразует бесконечность в NaN
			!isNaN(obj - parseFloat(obj));
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Выявление очевидных отрицательных результатов
		// Используйте toString вместо jQuery.type для получения объектов хоста
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			вернуть false;
		}

		proto = getProto( obj );

		// Объекты без прототипа (например, `Object.create(null)`) являются обычными.
		если ( !proto ) {
			вернуть true;
		}

		// Объекты с прототипом являются обычными, если они были созданы глобальной функцией объекта.
		Ctor = hasOwn.call( proto, "constructor") && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		имя переменной;
		for ( name in obj ) {
			вернуть false;
		}
		вернуть true;
	},

	тип: функция( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Поддержка: только Android <=2.3 (функциональное регулярное выражение)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			тип объекта;
	},

	// Выполняет скрипт в глобальном контексте
	globalEval: function( code ) {
		DOMEval( код );
	},

	// Преобразует дефис в верблюжий регистр; используется модулями css и data.
	// Поддержка: IE <=9 - 11, Edge 12 - 13
	// Microsoft забыла указать префикс своего поставщика (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	каждый: функция( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			длина = obj.length;
			for ( ; i < length; i++ ) {
				if (callback.call(obj[i], i, obj[i]) === false) {
					перерыв;
				}
			}
		} еще {
			for ( i in obj ) {
				if (callback.call(obj[i], i, obj[i]) === false) {
					перерыв;
				}
			}
		}

		возвращаем объект;
	},

	// Поддержка: только для Android <=4.0
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// Результаты предназначены только для внутреннего использования
	makeArray: function( arr, results ) {
		var ret = results || [];

		если (arr != null) {
			если ( isArrayLike ( Object ( arr ) ) ) {
				jQuery.merge(ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} еще {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Поддержка: только Android <=4.0, только PhantomJS 1
	// push.apply(_, arraylike) вызывает ошибку в устаревшем WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		вернуться первым;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			совпадения = [],
			i = 0,
			длина = elems.length,
			callbackExpect = !invert;

		// Проходим по массиву, сохраняя только элементы.
		// которые проходят проверку функции валидатора
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if (callbackInverse !== callbackExpect) {
				matches.push( elems[ i ] );
			}
		}

		ответные матчи;
	},

	// Аргумент предназначен только для внутреннего использования
	map: function( elems, callback, arg ) {
		длина переменной, значение,
			i = 0,
			ret = [];

		// Проходим по массиву, преобразуя каждый элемент в его новое значение.
		if ( isArrayLike( elems ) ) {
			длина = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				если (значение != null) {
					ret.push(value);
				}
			}

		// Проходим по каждому ключу объекта,
		} еще {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				если (значение != null) {
					ret.push(value);
				}
			}
		}

		// Сглаживание любых вложенных массивов
		return concat.apply( [], ret );
	},

	// Глобальный счетчик GUID для объектов
	guid: 1,

	// Привязывает функцию к контексту, при необходимости частично применяя любой из них.
	// аргументы.
	прокси: функция( fn, context ) {
		var tmp, args, proxy;

		if (typeof context === "string") {
			tmp = fn[ context ];
			контекст = fn;
			fn = tmp;
		}

		// Быстрая проверка, чтобы определить, является ли целевой объект вызываемым, в соответствии со спецификацией.
		// Это вызовет ошибку TypeError, но мы просто вернем undefined.
		if ( !jQuery.isFunction( fn ) ) {
			возвращаем неопределенное значение;
		}

		// Имитация привязки
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Устанавливаем GUID уникального обработчика равным GUID исходного обработчика, чтобы его можно было удалить.
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		возврат прокси;
	},

	сейчас: Дата.сейчас,

	// jQuery.support не используется в ядре, но другие проекты подключают свою функцию.
	// У него есть свойства, поэтому он должен существовать.
	поддержка: поддержка
} );

// JSHint выдаст ошибку в этом коде, поскольку символ не определен в ES5.
// Определение этой глобальной переменной в файле .jshintrc создаст опасность использования глобальной переменной.
// Если в другом месте отсутствует защита, кажется, безопаснее просто отключить JSHint для таких случаев.
// три строки.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Заполнить карту class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
функция( i, имя ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Поддержка: только реальная iOS 8.2 (не воспроизводится в симуляторе)
	// Проверка `in` используется для предотвращения ошибки JIT (gh-2145)
	// Функция hasOwn здесь не используется из-за ложных отрицательных результатов
	// относительно длины списка узлов в Internet Explorer
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		вернуть false;
	}

	тип возвращаемого значения === "массив" || длина === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Авторские права принадлежат jQuery Foundation и другим участникам проекта.
 * Распространяется под лицензией MIT
 * http://jquery.org/license
 *
 * Дата: 04.01.2016
 */
(function( window ) {

var i,
	поддерживать,
	Эксп.
	getText,
	isXML,
	токенизировать,
	компилировать,
	выбирать,
	внешний контекст,
	sortInput,
	hasDuplicate,

	// Локальные переменные документа
	setDocument,
	документ,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	матчи,
	содержит,

	// Данные, специфичные для конкретного экземпляра
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	выполнено = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		если (a === b) {
			hasDuplicate = true;
		}
		вернуть 0;
	},

	// Методы экземпляра
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Используйте упрощенный indexOf, так как он работает быстрее, чем нативный.
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				вернуть i;
			}
		}
		вернуть -1;
	},

	логические значения = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Регулярные выражения

	// http://www.w3.org/TR/css3-selectors/#whitespace
	пробел = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	идентификатор = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Селекторы атрибутов: http://www.w3.org/TR/selectors/#attribute-selectors
	атрибуты = "\\[" + пробел + "*(" + идентификатор + ")(?:" + пробел +
		// Оператор (захват 2)
		"*([*^$|!~]?=)" + пробел +
		// "Значения атрибутов должны быть идентификаторами CSS [захват 5] или строками [захват 3 или захват 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + идентификатор + "))|)" + пробел +
		"*\\]",

	pseudos = ":(" + идентификатор + ")(?:\\((" +
		// Чтобы уменьшить количество селекторов, требующих токенизации в preFilter, предпочтительнее использовать аргументы:
		// 1. цитируется (захват 3; захват 4 или захват 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. простой (захват 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + атрибуты + ")*)|" +
		// 3. все остальное (захват 2)
		".*" +
		")\\)|)",

	// Начальные и неэкранированные конечные пробелы, захватывающие некоторые символы, не являющиеся пробелами, предшествующие последним.
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"ДОЧЕРИЦЫ": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + пробел +
			"*(четное|нечетное|(([+-]|)(\\d*)n|)" + пробел + "*(?:([+-]|)" + пробел +
			"*(\\d+)|))" + пробел + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// Для использования в библиотеках, реализующих метод .is()
		// Мы используем это для сопоставления частей речи в `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			пробел + "*((?:-\\d)?\\d*)" + пробел + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Легко обрабатываемые/извлекаемые селекторы ID, TAG или CLASS
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS-экранирование
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN означает отсутствие кодовой точки
		// Поддержка: Firefox<24
		// Обходной путь для ошибочной числовой интерпретации +"0x"
		return high !== high || escapedWhitespace ?
			сбежал:
			высокий < 0 ?
				// Кодовая точка BMP
				String.fromCharCode( high + 0x10000 ) :
				// Кодовая точка дополнительной плоскости (суррогатная пара)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Сериализация строк/идентификаторов в CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL становится U+FFFD символом замены
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Управляющие символы и (в зависимости от позиции) числа экранируются как кодовые точки
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Другие потенциально специальные символы ASCII экранируются обратной косой чертой
		return "\\" + ch;
	},

	// Используется для iframe
	// См. setDocument()
	// Удаление обертки функции приводит к ошибке «Отказано в доступе»
	// ошибка в IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		функция( elem ) {
			return elem.disabled === true;
		},
		{ каталог: "parentNode", следующий: "легенда" }
	);

// Оптимизация для push.apply( _, NodeList )
пытаться {
	push.apply(
		(arr = срез.вызов(предпочтительныйDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Поддержка: Android < 4.0
	// Обнаружение незаметной ошибки при выполнении push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Используйте срез, если это возможно
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Поддержка: IE<9
		// В противном случае добавить напрямую
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Нельзя доверять NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// По умолчанию nodeType имеет значение 9, поскольку контекст по умолчанию равен document.
		nodeType = context ? context.nodeType : 9;

	результаты = результаты || [];

	// Досрочно завершить вызов из-за недопустимого селектора или контекста
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		вернуть результаты;
	}

	// Попытка ускорить операции поиска (в отличие от фильтров) в HTML-документах
	если ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		контекст = контекст || документ;

		if (documentIsHTML) {

			// Если селектор достаточно прост, попробуйте использовать метод DOM "get*By*".
			// (за исключением контекста DocumentFragment, где эти методы отсутствуют)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// Селектор идентификатора
				если ( (m = match[1]) ) {

					// Контекст документа
					если ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Поддержка: IE, Opera, Webkit
							// TODO: определить версии
							// Функция getElementById может сопоставлять элементы по имени, а не по идентификатору.
							if (elem.id === m) {
								results.push(elem);
								вернуть результаты;
							}
						} еще {
							вернуть результаты;
						}

					// Контекст элемента
					} еще {

						// Поддержка: IE, Opera, Webkit
						// TODO: определить версии
						// Функция getElementById может сопоставлять элементы по имени, а не по идентификатору.
						if ( newContext && (elem = newContext.getElementById( m )) &&
							содержит( контекст, элемент ) &&
							elem.id === m ) {

							results.push(elem);
							вернуть результаты;
						}
					}

				// Селектор типа
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					вернуть результаты;

				// Селектор класса
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					вернуть результаты;
				}
			}

			// Воспользуйтесь преимуществами querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				если (nodeType !== 1) {
					newContext = context;
					newSelector = selector;

				// qSA ищет элементы вне контекста элемента, что нам не нужно.
				// Благодарим Эндрю Дюпона за этот обходной метод.
				// Поддержка: IE <=8
				// Исключить элементы объекта
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Получаем идентификатор контекста, при необходимости устанавливая его предварительно.
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace(rcssescape, fcssescape);
					} еще {
						context.setAttribute( "id", (nid = expando) );
					}

					// Добавляем префикс к каждому селектору в списке
					группы = tokenize( селектор );
					i = groups.length;
					пока ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Развернуть контекст для селекторов соседних элементов
					newContext = rsibling.test(selector) && testContext(context.parentNode) ||
						контекст;
				}

				if (newSelector) {
					пытаться {
						push.apply( results,
							newContext.querySelectorAll(newSelector)
						);
						вернуть результаты;
					} catch (qsaError) {
					} окончательно {
						if ( nid === expando ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	}

	// Все остальные
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Создание кэшей типа «ключ-значение» ограниченного размера
 * @returns {function(string, object)} Возвращает данные объекта после сохранения их в самом себе с помощью
 * Имя свойства — строка (с пробелом) и (если размер кэша превышает Expr.cacheLength)
 * удаление самой старой записи
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Используйте (клавиша + ""), чтобы избежать конфликта с собственными свойствами прототипа (см. проблему #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Сохранять только самые последние записи
			удалить кэш[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	возвращаем кэш;
}

/**
 * Отметьте функцию для специального использования компанией Sizzle
 * @param {Функция} fn Функция, которую нужно отметить
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Поддержка тестирования с использованием элемента
 * @param {Function} fn Передает созданный элемент и возвращает логический результат
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	пытаться {
		return !!fn( el );
	} catch (e) {
		вернуть false;
	} окончательно {
		// По умолчанию удаляется из родительского элемента
		if (el.parentNode) {
			el.parentNode.removeChild(эль);
		}
		// Освободить память в IE
		el = null;
	}
}

/**
 * Добавляет один и тот же обработчик для всех указанных атрибутов
 * @param {String} attrs Список атрибутов, разделенных символом вертикальной черты
 * @param {Function} обработчик Метод, который будет применен
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	пока ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Проверяет порядок документов двух братьев и сестер
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Возвращает значение меньше 0, если a предшествует b, и больше 0, если a следует за b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Используйте IE sourceIndex, если он доступен на обоих узлах
	если (diff) {
		return diff;
	}

	// Проверяем, следует ли b за a
	если (cur) {
		while ( (cur = cur.nextSibling) ) {
			если (cur === b) {
				вернуть -1;
			}
		}
	}

	вернуть a ? 1 : -1;
}

/**
 * Возвращает функцию для использования в псевдосимволах для входных типов.
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		имя вар = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Возвращает функцию для использования в псевдосимволах для кнопок.
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		имя вар = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Возвращает функцию для использования в псевдосимволах для :enabled/:disabled
 * @param {Boolean} disabled true для :disabled; false для :enabled
 */
function createDisabledPseudo( disabled ) {
	// Известные ложные срабатывания: отключены
	// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
	// не IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Проверяйте элементы формы и элементы параметров на предмет явного отключения.
		return "label" in elem && elem.disabled === disabled ||
			"form" in elem && elem.disabled === disabled ||

			// Проверка неотключенных элементов формы на наличие предков fieldset[disabled].
			"form" in elem && elem.disabled === false && (
				// Поддержка: IE6-11+
				// Происхождение для нас обеспечено
				elem.isDisabled === disabled ||

				// В противном случае предполагается, что любой параметр, не являющийся <option> в fieldset[disabled], отключен.
				/* jshint -W018 */
				elem.isDisabled !== !disabled &&
					("label" in elem || !disabledAncestor( elem )) !== disabled
			);
	};
}

/**
 * Возвращает функцию для использования в псевдосимволах для позиционных операторов.
 * @param {Функция} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		аргумент = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Сопоставление элементов, найденных по указанным индексам
			пока ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Проверяет узел на допустимость в контексте Sizzle.
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} Входной узел, если он допустим, в противном случае — ложное значение.
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Предоставляем доступ к вспомогательным переменным для удобства
поддержка = Sizzle.support = {};

/**
 * Обнаруживает XML-узлы
 * @param {Element|Object} elem Элемент или документ
 * @returns {Boolean} True, если elem является не-HTML XML-узлом
 */
isXML = Sizzle.isXML = function( elem ) {
	// Проверка элемента documentElement выполняется в тех случаях, когда он еще не существует.
	// (например, загрузка iframe в IE - #4833)
	var documentElement = элемент && (elem.ownerDocument || elem).documentElement;
	вернуть элемент документа? documentElement.nodeName !== "HTML": false;
};

/**
 * Устанавливает переменные, связанные с документом, один раз на основе текущего документа.
 * @param {Element|Object} [doc] Элемент или объект документа, используемый для установки документа
 * @returns {Object} Возвращает текущий документ
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Вернитесь к исходному состоянию, если документ недействителен или уже выбран.
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		вернуть документ;
	}

	// Обновление глобальных переменных
	документ = документ;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Поддержка: IE 9-11, Edge
	// При попытке доступа к документам iframe после завершения загрузки возникают ошибки "отказано в доступе" (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Поддержка: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener("unload", unloadHandler, false);

		// Поддержка: только для IE 9-10
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent("onunload", unloadHandler);
		}
	}

	/* Атрибуты
	---------------------------------------------------------------------- */

	// Поддержка: IE<8
	// Убедитесь, что метод getAttribute действительно возвращает атрибуты, а не свойства.
	// (за исключением логических значений IE8)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Проверяем, возвращает ли метод getElementsByTagName("*") только элементы
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Поддержка: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Поддержка: IE<10
	// Проверяем, возвращает ли метод getElementById элементы по имени
	// Неработающие методы getElementById не обрабатывают имена, заданные программно.
	// поэтому используйте обходной путь проверки getElementsByName
	support.getById = assert(function( el ) {
		docElem.appendChild(el).id =expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// Поиск и фильтрация по идентификатору
	if (support.getById) {
		Expr.find["ID"] = function( id, context ) {
			if (typeof context.getElementById !== "undefined" && documentIsHTML) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} еще {
		// Поддержка: IE6/7
		// Функция getElementById не является надежным способом быстрого поиска.
		delete Expr.find["ID"];

		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Ярлык
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if (typeof context.getElementsByTagName !== "undefined") {
				return context.getElementsByTagName( tag );

			// Узлы DocumentFragment не имеют gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// По счастливому совпадению, (неработающий) gEBTN также появляется на узлах DocumentFragment.
				результаты = context.getElementsByTagName( tag );

			// Отфильтровать возможные комментарии
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if (elem.nodeType === 1) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			вернуть результаты;
		};

	// Сорт
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// Поддержка QSA и matchesSelector

	// matchesSelector(:active) сообщает false, когда true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// Функция qSa(:focus) выдает false, когда true (Chrome 21)
	// Мы разрешаем это из-за ошибки в IE8/9, которая приводит к сбою.
	// всякий раз, когда осуществляется доступ к `document.activeElement` в iframe
	// Таким образом, мы позволяем :focus всегда проходить через QSA, чтобы избежать ошибки IE.
	// См. https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Создание регулярного выражения QSA
		// Стратегия использования регулярных выражений заимствована у Диего Перини
		assert(function( el ) {
			// В поле "Выделено" намеренно установлена ​​пустая строка
			// Это сделано для проверки обработки IE символов, не указанных явно.
			// Установка логического атрибута содержимого,
			// поскольку его присутствия должно быть достаточно
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Поддержка: IE8, Opera 11-12.16
			// Ничего не должно быть выделено, если за ^=, $= или *= следуют пустые строки.
			// Атрибут теста должен быть неизвестен в Opera, но "безопасен" для WinRT.
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Поддержка: IE8
			// Логические атрибуты и значение обрабатываются некорректно.
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Поддержка: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked должен возвращать выбранные элементы опций
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// В этом месте IE8 выдает ошибку и не увидит последующие тесты.
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Поддержка: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Внутристраничный селектор `selector#id sibling-combinator selector` завершается ошибкой.
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Поддержка: нативные приложения Windows 8
			// При присваивании значения атрибутам type и name действуют ограничения.
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Поддержка: IE8
			// Обеспечить учет регистра атрибута имени
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled и скрытые элементы (скрытые элементы остаются включенными)
			// В этом месте IE8 выдает ошибку и не увидит последующие тесты.
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Поддержка: IE9-11+
			// Селектор `:disabled` в Internet Explorer не обрабатывает дочерние элементы `disabled` в `fieldset`.
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 не выдает ошибку при использовании недопустимых псевдонимов после запятой
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Проверяем, возможно ли использовать matchesSelector
			// на отключенном узле (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// Это должно завершиться ошибкой.
			// Gecko не выдает ошибку, а возвращает false.
			match.call(el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Содержит
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Элемент содержит другой
	// Намеренно самоисключительный
	// То есть элемент не содержит самого себя
	contains = hasCompare || rnative.test( docElem.contains ) ?
		функция( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			вернуть === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		функция( a, b ) {
			если (b) {
				while ( (b = b.parentNode) ) {
					если (b === a) {
						вернуть true;
					}
				}
			}
			вернуть false;
		};

	/* Сортировка
	---------------------------------------------------------------------- */

	// Сортировка порядка документов
	sortOrder = hasCompare ?
	функция( a, b ) {

		// Флаг для удаления дубликатов
		если (a === b) {
			hasDuplicate = true;
			вернуть 0;
		}

		// Сортировка по наличию метода, если только один входной параметр имеет параметр compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		если (сравнить) {
			вернуть сравнение;
		}

		// Вычисляем позицию, если оба поля ввода относятся к одному документу
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// В противном случае мы будем знать, что они отключены
			1;

		// Отключенные узлы
		если (сравнить & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Выберите первый элемент, относящийся к выбранному документу.
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				вернуть -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				вернуть 1;
			}

			// Сохранить исходный порядок
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	функция( a, b ) {
		// Выход из программы досрочно, если узлы идентичны
		если (a === b) {
			hasDuplicate = true;
			вернуть 0;
		}

		вар кур,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Бесродительские узлы представляют собой либо документы, либо отключенные узлы.
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === документ ? 1 :
				aup ? -1 :
				буп ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// Если узлы являются соседними, мы можем быстро это проверить.
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// В противном случае нам понадобятся полные списки их предков для сравнения.
		кур = а;
		while ((cur = cur.parentNode)) {
			ap.unshift( cur );
		}
		кур = b;
		while ((cur = cur.parentNode)) {
			bp.unshift( cur );
		}

		// Спуститесь по дереву, ища несоответствие
		while ( ap[i] === bp[i] ) {
			i++;
		}

		вернуть i ?
			// Выполнить проверку на наличие общего предка у узлов-соседей.
			siblingCheck( ap[i], bp[i] ) :

			// В противном случае узлы в нашем документе сортируются первыми
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	вернуть документ;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// При необходимости установите переменные документа
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Убедитесь, что селекторы атрибутов заключены в кавычки
	expr = expr.replace( rattributeQuotes, "='$1']" );

	если (support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		пытаться {
			var ret = match.call(elem, expr);

			// В Internet Explorer 9 matchesSelector возвращает false для отключенных узлов
			если ( ret || support.disconnectedMatch ||
					// Кроме того, считается, что в документе находятся несвязанные узлы.
					// фрагмент в IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// При необходимости установите переменные документа
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// При необходимости установите переменные документа
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Не позволяйте свойствам Object.prototype ввести вас в заблуждение (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			неопределенный;

	return val !== undefined ?
		вал :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				нулевой;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error("Синтаксическая ошибка, нераспознанное выражение: " + msg );
};

/**
 * Сортировка документов и удаление дубликатов
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		дубликаты = [],
		j = 0,
		i = 0;

	// Если мы *точно* не можем обнаружить дубликаты, предполагаем их наличие.
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if (elem === results[i]) {
				j = duplicates.push( i );
			}
		}
		пока ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Очистка входных данных после сортировки для освобождения объектов
	// См. https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	вернуть результаты;
};

/**
 * Вспомогательная функция для получения текстового значения массива DOM-узлов
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		рет = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// Если тип узла не указан, ожидается, что это будет массив.
		while ( (node ​​= elem[i++]) ) {
			// Не обходить узлы комментариев
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Используйте textContent для элементов
		// Использование innerText удалено для обеспечения единообразия переносов строк (jQuery #11153)
		if (typeof elem.textContent === "string") {
			return elem.textContent;
		} еще {
			// Проходим по его дочерним элементам
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Не включать узлы комментариев или инструкций обработки

	return ret;
};

Expr = Sizzle.selectors = {

	// Может быть изменено пользователем
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	находить: {},

	родственник: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Переместить заданное значение так, чтобы оно соответствовало [3] независимо от того, заключено оно в кавычки или нет
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* совпадения из matchExpr["CHILD"]
				1 тип (только|n-й|...)
				2 что (ребенок|типа)
				3 аргумента (четное|нечетное|\d*|\d*n([+-]\d+)?|...)
				4 xn-компонент аргумента xn+y ([+-]?\d*n|)
				5 знак xn-компонента
				6 x xn-компонента
				7 знак y-компоненты
				8 y y-компоненты
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* требует аргумента
				если ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// Числовые параметры x и y для Expr.filter.CHILD
				// Помните, что значения false/true преобразуются соответственно в 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "четное" || match[3] === "нечетное" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// Другие типы аргументов запрещают аргументы
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			ответный матч;
		},

		"ПСЕВДО": функция( match ) {
			избыток переменных,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				вернуть null;
			}

			// Принимаем аргументы в кавычках как есть
			если ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Удаляет лишние символы из аргументов, не заключенных в кавычки
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Получаем излишки данных из токенизации (рекурсивно)
				(excess = tokenize( unquoted, true )) &&
				// перейти к следующей закрывающей скобке
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// Избыток — это отрицательный индекс
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Возвращает только те данные, которые необходимы для метода псевдофильтра (тип и аргумент)
			return match.slice( 0, 3 );
		}
	},

	фильтр: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				функция( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			шаблон возврата ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				если (result == null) {
					return operator === "!=";
				}
				если ( !оператор ) {
					вернуть true;
				}

				результат += "";

				return operator === "=" ? result === check :
					оператор === "!=" ? результат !== проверка :
					оператор === "^=" ? проверка && результат.индекс( проверка ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					оператор === "|=" ? результат === проверка || результат.срез( 0, проверка.длина + 1 ) === проверка + "-" :
					ЛОЖЬ;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = что === "типа";

			return first === 1 && last === 0 ?

				// Сокращенная комбинация клавиш для :nth-*(n)
				функция( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					кэш var, uniqueCache, externalCache, узел, nodeIndex, начало,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						родитель = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					если (родитель) {

						// :(первый|фамилия|только)-(дочерний|типа)
						если (простой) {
							пока (dir) {
								узел = элемент;
								while ( (node ​​= node[ dir ]) ) {
									если ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										вернуть false;
									}
								}
								// Изменить направление для :only-* (если мы еще этого не сделали)
								start = dir = type === "only" && !start && "nextSibling";
							}
							вернуть true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) хранит данные кэша в `parent`
						if ( forward && useCache ) {

							// Найти элемент `elem` в ранее кэшированном индексе

							// ...способом, совместимым с gzip
							узел = родительский;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Поддержка: только для IE <9
							// Защита от клонированных свойств (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = кэш[0] === dirruns && кэш[1];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && родительский.childNodes[ nodeIndex ];

							while ( (node ​​= ++nodeIndex && node && node[ dir ] ||

								// В качестве запасного варианта поиск элемента `elem` начинается с самого начала.
								(diff = nodeIndex = 0) || start.pop()) ) {

								// При обнаружении кэширует индексы на `parent` и прерывает операцию.
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									перерыв;
								}
							}

						} еще {
							// Использовать ранее кэшированный индекс элемента, если он доступен
							if (useCache) {
								// ...способом, совместимым с gzip
								узел = элемент;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Поддержка: только для IE <9
								// Защита от клонированных свойств (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = кэш[0] === dirruns && кэш[1];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// или :nth-last-child(...) или :nth(-last)?-of-type(...)
							if (diff === false) {
								// Используйте тот же цикл, что и выше, чтобы переместить элемент `elem` с начала.
								while ( (node ​​= ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									если ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Кэшировать индекс каждого встреченного элемента
										if (useCache) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Поддержка: только для IE <9
											// Защита от клонированных свойств (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[type] = [dirruns, diff];
										}

										если (node ​​=== elem) {
											перерыв;
										}
									}
								}
							}
						}

						// Учитываем смещение, затем проверяем его на соответствие размеру цикла.
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// Имена псевдоклассов нечувствительны к регистру
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Приоритет определяется регистром символов в случае добавления пользовательских псевдонимов, содержащих заглавные буквы.
			// Помните, что setFilters наследует от pseudos.
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error("unsupported pseudo: " + pseudo );

			// Пользователь может использовать createPseudo для указания того, что
			// Для создания функции фильтра необходимы аргументы
			// точно так же, как это делает Sizzle
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// Но при этом сохранить поддержку старых подписей
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						пока ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					функция( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	псевдосимволы: {
		// Потенциально сложные псевдосимволы
		"не": markFunction(function( selector ) {
			// Удаляем селектор, переданный в функцию компиляции
			// чтобы избежать обработки начального и конечного значений
			// пространства как комбинаторы
			var input = [],
				результаты = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Сопоставить элементы, не соответствующие `matcher`
					пока ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Не сохранять элемент (проблема #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"содержит": markFunction(function( text ) {
			текст = текст.replace( runescape, funescape );
			return function( elem ) {
				return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
			};
		}),

		// "Указывает, представлен ли элемент селектором :lang()"
		// основано исключительно на языковом значении элемента
		// равно идентификатору C,
		// или начиная с идентификатора C, за которым сразу следует "-".
		// Сопоставление значения C со значением языка элемента выполняется без учета регистра.
		// Идентификатор C не обязательно должен быть допустимым названием языка.
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// Значение lang должно быть допустимым идентификатором
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error("unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				делать {
					если ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf(lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				вернуть false;
			};
		}),

		// Разнообразный
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Логические свойства
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"проверено": функция( elem ) {
			// В CSS3, `:checked` должен возвращать как отмеченные, так и выбранные элементы.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			вар имя_узла = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"выбрано": функция( elem ) {
			// При обращении к этому свойству по умолчанию выбирается значение "selected".
			// Параметры в Safari работают корректно
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Содержание
		"пустой": функция( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty инвертируется элементом (1) или узлами содержимого (текст: 3; cdata: 4; ссылка на сущность: 5),
			// но не другими (комментарий: 8; инструкция обработки: 7; и т. д.)
			// nodeType < 6 работает, потому что атрибуты (2) не отображаются как дочерние элементы
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				если (elem.nodeType < 6) {
					вернуть false;
				}
			}
			вернуть true;
		},

		"родитель": функция( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Типы элементов/входных данных
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"входные данные": функция( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"кнопка": функция( elem ) {
			имя вар = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"текст": функция( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Поддержка: IE<8
				// Новые значения атрибутов HTML5 (например, "search") отображаются при elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Позиция в коллекции
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Добавить псевдонимы типа кнопки/поля ввода
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Простой API для создания новых setFilters
функция setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	если (кэшировано) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = селектор;
	группы = [];
	preFilters = Expr.preFilter;

	пока (пока) {

		// Запятая и первый запуск
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			если (соответствует) {
				// Не следует считать завершающие запятые допустимыми
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Комбинаторы
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				значение: совпадает,
				// Преобразовать комбинаторы-потомки в пространство
				тип: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Фильтры
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					значение: совпадает,
					тип: тип,
					матчи: матч
				});
				soFar = soFar.slice( matched.length );
			}
		}

		если ( !matched ) {
			перерыв;
		}
	}

	// Возвращает длину недопустимого избытка
	// если мы просто выполняем парсинг
	// В противном случае, выбросить ошибку или вернуть токены
	return parseOnly ?
		soFar.length :
		до сих пор ?
			Sizzle.error(selector):
			// Кэшировать токены
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		селектор = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	возвращаемый селектор;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Проверка по ближайшему предку/предшествующему элементу
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if (elem.nodeType === 1 || checkNonElements ) {
					return matcher(elem, context, xml);
				}
			}
		} :

		// Проверка на соответствие всем родительским/предшествующим элементам
		function( elem, context, xml ) {
			вар oldCache, uniqueCache, externalCache,
				newCache = [ dirruns, doneName ];

			// Мы не можем устанавливать произвольные данные в XML-узлах, поэтому они не получают преимуществ от кэширования комбинаторов.
			если ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if (elem.nodeType === 1 || checkNonElements ) {
						if (matcher(elem, context, xml)) {
							вернуть true;
						}
					}
				}
			} еще {
				while ( (elem = elem[ dir ]) ) {
					if (elem.nodeType === 1 || checkNonElements ) {
						externalCache = элемент[expando] || (элемент[expando] = {});

						// Поддержка: только для IE <9
						// Защита от клонированных свойств (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Присваиваем значение newCache, чтобы результаты распространялись на предыдущие элементы.
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} еще {
							// Повторное использование newcache для распространения результатов на предыдущие элементы
							uniqueCache[ key ] = newCache;

							// Совпадение означает, что проверка завершена; неудача означает, что нам нужно продолжать проверку.
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								вернуть true;
							}
						}
					}
				}
			}
		};
}

функция elementMatcher(сопоставители) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			пока ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					вернуть false;
				}
			}
			вернуть true;
		} :
		сопоставители[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	вернуть результаты;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push(elem);
				если (mapped) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Получение начальных элементов из затравочного значения или контекста
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Предварительная фильтрация для получения входных данных для сопоставления, сохраняющая карту для синхронизации результатов с начальным значением.
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				элементы,

			matcherOut = matcher ?
				// Если у нас есть postFinder, отфильтрованный начальный параметр, postFilter без начального параметра или уже существующие результаты,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...необходима промежуточная обработка
					[] :

					// ...в противном случае используйте результаты напрямую
					результаты:
				matcherIn;

		// Найти основные совпадения
		если (matcher) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Применить постфильтр
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Удаляет несоответствующие элементы, перемещая их обратно в matcherIn
			i = temp.length;
			пока ( i-- ) {
				если ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		если (seed) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Получаем окончательный результат matcherOut, сжимая этот промежуточный результат в контексты postFinder.
					temp = [];
					i = matcherOut.length;
					пока ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Восстановить matcherIn, поскольку elem еще не является окончательным совпадением
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Перемещаем совпадающие элементы из начального значения в результаты для обеспечения их синхронизации.
				i = matcherOut.length;
				пока ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Добавить элементы в результаты, используя postFinder, если он определен.
		} еще {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} еще {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// Базовый сопоставитель гарантирует доступность элементов из контекста(ов) верхнего уровня.
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext(elem, context, xml) :
					matchAnyContext( elem, context, xml ) );
			// Избегайте сохранения элемента (проблема #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [addCombinator(elementMatcher(matchers), matcher)];
		} еще {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Возвращает специальный символ при обнаружении позиционного соответствия
			if ( matcher[ expando ] ) {
				// Найти следующий относительный оператор (если таковой имеется) для корректной обработки
				j = ++i;
				for ( ; j < len; j++ ) {
					if (Expr.relative[tokens[j].type]) {
						перерыв;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher(сопоставители),
					i > 1 && toSelector(
						// Если предыдущий токен являлся комбинатором потомков, вставьте неявный элемент `*`, допускающий любой элемент.
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					сопоставитель,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	вернуть elementMatcher(сопоставители);
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Мы всегда должны иметь либо начальные элементы, либо внешний контекст.
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Использовать целочисленные переменные dirruns, если это самый внешний сопоставитель.
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			если (самый внешний) {
				outermostContext = context === document || context || outermost;
			}

			// Добавляем элементы, передавая elementMatchers напрямую в результаты
			// Поддержка: IE<9, Safari
			// Допускать совпадение свойств NodeList (например, "length"; Safari: <number>) с элементами по идентификатору
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if (matcher(elem, context || document, xml)) {
							results.push(elem);
							перерыв;
						}
					}
					если (самый внешний) {
						dirruns = dirrunsUnique;
					}
				}

				// Отслеживание несовпадающих элементов для фильтров набора
				если (bySet) {
					// Они просмотрели все возможные варианты сопоставления
					if ( (elem = !matcher && elem)) {
						matchedCount--;
					}

					// Удлиняем массив для каждого элемента, независимо от того, найден ли он или нет.
					если (seed) {
						unmatched.push( elem );
					}
				}
			}

			// Теперь `i` — это количество элементов, посещенных выше, и мы добавляем его к `matchedCount`.
			// делает последнее неотрицательным.
			matchedCount += i;

			// Применить заданные фильтры к несовпадающим элементам
			// ПРИМЕЧАНИЕ: Этот шаг можно пропустить, если нет несовпадающих элементов (т.е. `matchedCount`).
			// равно `i`), если только мы не посетили _какие-либо_ элементы в приведенном выше цикле, потому что у нас есть
			// Нет сопоставителей элементов и нет начального значения.
			// Увеличение значения `i`, изначально равного "0", позволяет `i` оставаться строкой только в этом случае.
			// случай, который приведет к значению `matchedCount` "00", отличающемуся от `i`, но также являющемуся
			// численно равен нулю.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				если (seed) {
					// Повторно объединяем совпадения элементов, чтобы исключить необходимость сортировки.
					if ( matchedCount > 0 ) {
						пока ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Отбрасываем значения-заполнители индекса, чтобы получить только фактические совпадения
					setMatched = condense( setMatched );
				}

				// Добавить совпадения в результаты
				push.apply( results, setMatched );

				// В бесначальном наборе совпадений, следующих за несколькими успешными совпадениями, указывается сортировка.
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Переопределение манипуляций с глобальными переменными с помощью вложенных сопоставителей
			если (самый внешний) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			возврат несовпадающий;
		};

	return bySet ?
		markFunction( superMatcher ) :
		суперМэтчер;
}

compile = Sizzle.compile = function( selector, match /* Только для внутреннего использования */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	если ( !cached ) {
		// Создает функцию рекурсивных функций, которую можно использовать для проверки каждого элемента.
		если ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		пока ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} еще {
				elementMatchers.push( cached );
			}
		}

		// Кэшировать скомпилированную функцию
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Сохранение селектора и токенизации
		cached.selector = selector;
	}
	возвращаем кэшированное значение;
};

/**
 * Низкоуровневая функция выделения, работающая с скомпилированными функциями Sizzle.
 * функции выбора
 * @param {String|Function} selector Селектор или предварительно скомпилированный
 * Функция селектора, созданная с помощью Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] Набор элементов для сопоставления
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	результаты = результаты || [];

	// Постарайтесь минимизировать количество операций, если в списке только один селектор и нет начального значения.
	// (последнее гарантирует нам контекст)
	if ( match.length === 1 ) {

		// Уменьшить контекст, если ведущий составной селектор является идентификатором.
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			если ( !context ) {
				вернуть результаты;

			// Предварительно скомпилированные сопоставители по-прежнему будут проверять происхождение, поэтому перейдите на уровень выше.
			} else if (compiled ) {
				контекст = контекст.родительскийУзел;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Получаем набор начальных значений для сопоставления справа налево
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		пока ( i-- ) {
			токен = токены[i];

			// Прервать выполнение, если мы наткнемся на комбинатор
			if (Expr.relative[(type = token.type)]) {
				перерыв;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Поиск с расширением контекста для ведущих комбинаторов-братьев и сестер
				если ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// Если начальное значение пусто или токенов не осталось, мы можем вернуться раньше.
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					если ( !selector ) {
						push.apply( results, seed );
						вернуть результаты;
					}

					перерыв;
				}
			}
		}
	}

	// Скомпилировать и выполнить функцию фильтрации, если она не предоставлена.
	// Укажите `match`, чтобы избежать повторной токенизации, если мы изменили селектор выше.
	( compiled || compile( selector, match ) )(
		семя,
		контекст,
		!documentIsHTML,
		результаты,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	вернуть результаты;
};

// Разовые задания

// Стабильность сортировки
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Поддержка: Chrome 14-35+
// Всегда предполагайте наличие дубликатов, если они не переданы в функцию сравнения.
support.detectDuplicates = !!hasDuplicate;

// Инициализация относительно документа по умолчанию
setDocument();

// Поддержка: Webkit<537.32 - Safari 6.0.3/Chrome 25 (исправлено в Chrome 27)
// Отделившиеся узлы, сбивая с толку, следуют *друг за другом*.
support.sortDetached = assert(function( el ) {
	// Должно возвращать 1, но возвращает 4 (далее)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Поддержка: IE<8
// Предотвращение «интерполяции» атрибутов/свойств
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		если ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Поддержка: IE<9
// Используйте defaultValue вместо getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle("value", function(elem, name, isXML) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Поддержка: IE<9
// Используйте getAttributeNode для получения логических значений, если getAttribute неверен.
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		если ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				нулевой;
		}
	});
}

вернуть Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Устарело
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;



var dir = функция (elem, dir, до тех пор, пока) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if (elem.nodeType === 1) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				перерыв;
			}
			matched.push( elem );
		}
	}
	Возвращено совпадение;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	Возвращено совпадение;
	};
	

var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Реализуйте одинаковую функциональность для фильтра и для не
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if (qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if (typeof qualifier === "string") {
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not );
		}

		qualifier = jQuery.filter(qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	если (не) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	найти: функция( селектор) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						вернуть true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find(selector, self[i], ret);
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	фильтр: функция( селектор ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	не: функция( селектор) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			этот,

			// Если это позиционный/относительный селектор, проверьте принадлежность к возвращаемому множеству.
			// Таким образом, $("p:first").is("p:last") не вернет true для документа с двумя "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery(selector):
				селектор || [],
			ЛОЖЬ
		).длина;
	}
} );


// Инициализация объекта jQuery


// Центральная ссылка на корневой jQuery(document)
var rootjQuery,

	// Простой способ проверки наличия HTML-строк
	// Приоритет отдается #id, а не <tag>, чтобы избежать XSS-атак через location.hash (#9521)
	// Строгое распознавание HTML (#11290: должно начинаться с <)
	// Простой сокращенный вариант #id для повышения скорости
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		если ( !selector ) {
			вернуть это;
		}

		// Метод init() принимает альтернативный rootjQuery
		// чтобы функция миграции могла поддерживать jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Обработка HTML-строк
		if ( typeof selector === "string" ) {
			если ( селектор[0] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Предположим, что строки, начинающиеся и заканчивающиеся символом <>, являются HTML-кодом, и пропустим проверку регулярным выражением.
				match = [ null, selector, null ];

			} еще {
				match = rquickExpr.exec( selector );
			}

			// Сопоставьте HTML-код или убедитесь, что для #id не указан контекст.
			если ( match && ( match[ 1 ] || !context ) ) {

				// ОБРАБОТКА: $(html) -> $(array)
				если ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Параметр запуска скриптов установлен в значение true для обратной совместимости
					// Преднамеренно выбрасываем ошибку, если параметр parseHTML отсутствует.
					jQuery.merge( this, jQuery.parseHTML(
						матч[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						истинный
					) );

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						для (сопоставление в контексте) {

							// Свойства контекста вызываются как методы, если это возможно.
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...и в противном случае устанавливаются в качестве атрибутов
							} еще {
								this.attr( match, context[ match ] );
							}
						}
					}

					вернуть это;

				// Идентификатор: $(#id)
				} еще {
					elem = document.getElementById( match[ 2 ] );

					если (elem) {

						// Внедряем элемент непосредственно в объект jQuery
						this[ 0 ] = elem;
						this.length = 1;
					}
					вернуть это;
				}

			// ДЕБЮЛЛЕКТ: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// ДЕБЮЛЛЕКТ: $(expr, context)
			// (что эквивалентно: $(context).find(expr)
			} еще {
				return this.constructor( context ).find( selector );
			}

		// Идентификатор: $(DOMElement)
		} else if (selector.nodeType) {
			this[ 0 ] = селектор;
			this.length = 1;
			вернуть это;

		// ДЕБЮРАТОР: $(функция)
		// Сочетание клавиш для готовности документа
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready(selector):

				// Выполнить немедленно, если состояние готовности отсутствует
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Присвойте функции инициализации прототип jQuery для последующего создания экземпляра.
init.prototype = jQuery.fn;

// Инициализация центральной ссылки
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Методы, гарантирующие создание уникального набора при исходном уникальном наборе
	guaranteedUnique = {
		дети: правда,
		содержимое: true,
		следующий: правда,
		предыдущая: истина
	};

jQuery.fn.extend( {
	имеет: функцию( цель ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					вернуть true;
				}
			}
		} );
	},

	ближайший: функция( селекторы, контекст ) {
		вар кур,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Позиционные селекторы никогда не совпадают, поскольку отсутствует контекст _выбора_.
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

					// Всегда пропускать фрагменты документа
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Не передавайте в Sizzle элементы, не являющиеся элементами.
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						перерыв;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Определяет позицию элемента в наборе
	индекс: функция( elem ) {

		// Аргументы отсутствуют, возвращаем индекс в родительском элементе.
		если ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Индекс в селекторе
		if (typeof elem === "string") {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Определяем позицию нужного элемента
		return indexOf.call( this,

			// Если получен объект jQuery, используется первый элемент.
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	добавить: функцию( селектор, контекст ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	вернуть кур;
}

jQuery.each( {
	родитель: функция( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	родители: функция( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	далее: функция( elem ) {
		return sibling( elem, "nextSibling" );
	},
	предыдущая: функция( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir(elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	соседние элементы: функция( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	дети: функция( elem ) {
		return siblings( elem.firstChild );
	},
	содержимое: функция( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		если (this.length > 1) {

			// Удалить дубликаты
			if ( !guaranteeUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Обратный порядок для родителей* и предыдущих производных
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Преобразует параметры в строковом формате в параметры в объектном формате
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		объект[флаг] = true;
	} );
	возвращаемый объект;
}

/*
 * Создайте список обратных вызовов, используя следующие параметры:
 *
 * параметры: необязательный список параметров, разделенных пробелами, которые будут изменять способ
 * Список обратных вызовов ведет себя как более традиционный объект параметров.
 *
 * По умолчанию список обратных вызовов будет действовать как список обратных вызовов событий и может быть
 * "выстрелил" несколько раз.
 *
 * Возможные варианты:
 *
 * once: гарантирует, что список обратных вызовов может быть запущен только один раз (как отложенный вызов).
 *
 * память: будет отслеживать предыдущие значения и вызывать любую добавленную функцию обратного вызова.
 * после того, как список был немедленно обработан с использованием последнего "запомненного" элемента
 * значения (как у отложенных платежей)
 *
 * unique: гарантирует, что функция обратного вызова может быть добавлена ​​только один раз (без дубликатов в списке).
 *
 * stopOnFalse: прерывает вызовы функций, когда функция обратного вызова возвращает false.
 *
 */
jQuery.Callbacks = function( options ) {

	// При необходимости преобразуйте параметры из строкового формата в объектный.
	// (сначала проверяем кэш)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Флаг, указывающий, выполняется ли в данный момент операция списка
		стрельба,

		// Последнее значение срабатывания для списков, которые нельзя забыть
		память,

		// Флаг, указывающий, был ли список уже запущен
		уволенный,

		// Флаг для предотвращения срабатывания
		заблокировано,

		// Фактический список обратных вызовов
		список = [],

		// Очередь данных для выполнения для повторяющихся списков
		очередь = [],

		// Индекс текущего срабатывающего коллбэка (изменяется путем добавления/удаления по мере необходимости)
		firingIndex = -1,

		// Вызов обратных вызовов
		fire = function() {

			// Обеспечить стрельбу одиночными выстрелами
			locked = options.once;

			// Выполнить обратные вызовы для всех ожидающих выполнения,
			// Учитываем переопределения firingIndex и изменения, внесенные во время выполнения
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				память = очередь.сдвиг();
				while ( ++fireingIndex < list.length ) {

					// Выполнить функцию обратного вызова и проверить наличие преждевременного завершения
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Переходим к концу и забываем данные, чтобы метод .add не срабатывал повторно.
						firingIndex = list.length;
						память = false;
					}
				}
			}

			// Забудем о данных, если мы с ними закончили.
			if ( !options.memory ) {
				память = false;
			}

			firing = false;

			// Убираем за собой, если стрельба окончательно завершена
			если (заблокировано) {

				// Сохраняем пустой список, если у нас есть данные для будущих вызовов добавления.
				если (память) {
					список = [];

				// В противном случае этот объект будет использован
				} еще {
					список = "";
				}
			}
		},

		// Фактический объект обратных вызовов
		self = {

			// Добавить в список функцию обратного вызова или набор таких функций
			добавить: функция() {
				если (список) {

					// Если у нас есть память о предыдущем запуске, мы должны выполнить операцию после добавления
					if ( memory && !fireing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					(function add(args) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Рекурсивная проверка
								add( arg );
							}
						} );
					} )( аргументы );

					if ( memory && !fireing ) {
						огонь();
					}
				}
				вернуть это;
			},

			// Удалить функцию обратного вызова из списка
			удалить: функция() {
				jQuery.each( arguments, function( _, arg ) {
					переменный индекс;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Обработка индексов срабатывания
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				вернуть это;
			},

			// Проверяем, присутствует ли заданная функция обратного вызова в списке.
			// Если аргументы не указаны, возвращает значение, указывающее, есть ли у списка прикрепленные функции обратного вызова.
			имеет: функцию( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Удалить все коллбэки из списка
			пустой: функция() {
				если (список) {
					список = [];
				}
				вернуть это;
			},

			// Отключить .fire и .add
			// Прервать выполнение любых текущих/ожидающих операций
			// Очистить все функции обратного вызова и значения
			отключить: функция() {
				заблокировано = очередь = [];
				список = память = "";
				вернуть это;
			},
			disabled: function() {
				return !list;
			},

			// Отключить .fire
			// Также отключаем метод .add, если нет памяти (поскольку он не будет иметь никакого эффекта)
			// Прервать все ожидающие выполнения
			блокировка: функция() {
				заблокировано = очередь = [];
				if ( !memory && !firing ) {
					список = память = "";
				}
				вернуть это;
			},
			заблокировано: функция() {
				return !!locked;
			},

			// Вызываем все функции обратного вызова с заданным контекстом и аргументами
			fireWith: function( context, args ) {
				если ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push(args);
					если ( !fireing ) {
						огонь();
					}
				}
				вернуть это;
			},

			// Вызываем все функции обратного вызова с заданными аргументами
			огонь: функция() {
				self.fireWith( this, arguments );
				вернуть это;
			},

			// Чтобы узнать, были ли уже вызваны функции обратного вызова хотя бы один раз.
			fired: function() {
				return !!fired;
			}
		};

	вернуть себя;
};


функция Identity( v ) {
	вернуть v;
}
function Thrower( ex ) {
	бросить ex;
}

function adoptValue( value, resolve, reject ) {
	метод var;

	пытаться {

		// Сначала проверьте наличие аспекта промиса, чтобы отдать приоритет синхронному поведению.
		if (value && jQuery.isFunction((method = value.promise))) {
			method.call( value ).done( resolve ).fail( reject );

		// Другие затемблы
		} else if (value && jQuery.isFunction((method = value.then))) {
			method.call( value, resolve, reject );

		// Другие не подлежащие рассмотрению
		} еще {

			// Поддержка: только Android 4.0
			// Функции строгого режима, вызываемые без методов .call/.apply, получают контекст глобального объекта
			resolve.call( undefined, value );
		}

	// Для Promises/A+ преобразуйте исключения в отклонения
	// Поскольку jQuery.when не разворачивает thenable-объекты, мы можем пропустить дополнительные проверки, которые появляются в
	// Deferred#then для условного подавления отклонения.
	} catch ( /*jshint -W002 */ value ) {

		// Поддержка: только Android 4.0
		// Функции строгого режима, вызываемые без методов .call/.apply, получают контекст глобального объекта
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Отложенная функция: function( func ) {
		var tuples = [

				// действие, добавить слушатель, колбэки,
				// ... .then обработчики, индекс аргумента, [конечное состояние]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks("memory"), 2],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			состояние = "ожидание",
			обещание = {
				состояние: функция() {
					возвращаемое состояние;
				},
				всегда: функция() {
					deferred.done( arguments ).fail( arguments );
					вернуть это;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Сохраните символ вертикальной черты для обратной совместимости
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each(tuples, function(i, tuple) {

							// Сопоставляем кортежи (progress, done, fail) с аргументами (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							отложенный[ кортеж[ 1 ] ]( функция() {
								var returned = fn && fn.apply( this, arguments );
								if (returned && jQuery.isFunction(returned.promise )) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} еще {
									newDefer[ tuple[ 0 ] + "With" ](
										этот,
										fn ? [ возвращено ] : аргументы
									);
								}
							} );
						} );
						fns = null;
					} ).обещать();
				},
				затем: функция( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = аргументы,
								mightThrow = function() {
									Затем была возвращена переменная;

									// Поддержка: Promises/A+ раздел 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Игнорировать попытки двойного разрешения
									если (depth < maxDepth ) {
										возвращаться;
									}

									returned = handler.apply( that, args );

									// Поддержка: Promises/A+ раздел 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise() ) {
										throw new TypeError("Затем включить саморазрешение");
									}

									// Поддержка: Promises/A+ разделы 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Получаем значение `then` только один раз
									затем = возвращено &&

										// Поддержка: Promises/A+ раздел 2.3.4
										// https://promisesaplus.com/#point-64
										// Проверяем на возможность последующего использования только объекты и функции.
										(typeof возвращает === "object" ||
											typeof возвращает === "функция" ) &&
										вернул.тогда;

									// Обработка возвращаемого объекта Thenable
									if ( jQuery.isFunction( then ) ) {

										// Специальные обработчики (уведомления) просто ждут разрешения
										если (специальный) {
											затем.вызов(
												вернулся,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Обычные обработчики (resolve) также подключаются к процессу progress
										} еще {

											// ...и игнорируйте более старые значения разрешения
											maxDepth++;

											затем.вызов(
												вернулся,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Обработка всех остальных возвращаемых значений
									} еще {

										// Контекст передают только замещающие обработчики.
										// и несколько значений (нестандартное поведение)
										if (handler !== Identity ) {
											что = неопределено;
											args = [ returned ];
										}

										// Обработка значения(й)
										// Процесс по умолчанию завершается
										(special || deferred.resolveWith)(that, args);
									}
								},

								// Только обычные обработчики (resolve) перехватывают и отклоняют исключения.
								процесс = особый?
									mightThrow :
									функция() {
										пытаться {
											mightThrow();
										} catch ( e ) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Поддержка: Promises/A+ раздел 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Игнорировать исключения, возникающие после разрешения
											if (depth + 1 >= maxDepth ) {

												// Контекст передают только замещающие обработчики.
												// и несколько значений (нестандартное поведение)
												if (handler !== Thrower ) {
													что = неопределено;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Поддержка: Promises/A+ раздел 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Повторно разрешайте промисы немедленно, чтобы избежать ложного отклонения.
							// последующие ошибки
							если (глубина) {
								процесс();
							} еще {

								// Вызываем необязательный обработчик для записи стека в случае исключения
								// поскольку в противном случае данные теряются при асинхронном выполнении.
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						кортежи[ 0 ][ 3 ].add(
							решать(
								0,
								новыйDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Личность,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						кортежи[ 1 ][ 3 ].add(
							решать(
								0,
								новыйDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Личность
							)
						);

						// rejected_handlers.add( ... )
						кортежи[ 2 ][ 3 ].add(
							решать(
								0,
								новыйDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Метатель
							)
						);
					} ).обещать();
				},

				// Получить промис для этого отложенного события
				// Если указан объект obj, к нему добавляется аспект промиса.
				обещание: функция( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			отложенный = {};

		// Добавить методы, специфичные для списка
		jQuery.each(tuples, function(i, tuple) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Состояние дескриптора
			if (stateString) {
				list.add(
					функция() {

						// состояние = "решено" (т.е. выполнено)
						// состояние = "отклонено"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					кортежи[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					кортежи[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				вернуть это;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Превратите отложенное действие в обещание
		promise.promise(deferred);

		// Вызвать заданную функцию, если таковая имеется
		если (функция) {
			func.call( deferred, deferred );
		}

		// Всё готово!
		возврат отложен;
	},

	// Отложенный вспомогательный метод
	когда: функция( singleValue ) {
		вар

			// количество незавершенных подчиненных
			оставшиеся = аргументы.длина,

			// количество необработанных аргументов
			i = оставшийся,

			// данные о подчиненном выполнении
			resolveContexts = Array( i ),
			resolveValues ​​= slice.call( arguments ),

			// основной отложенный
			master = jQuery.Deferred(),

			// Фабрика подчиненных обратных вызовов
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					если ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// Одиночные и пустые аргументы используются так же, как и в Promise.resolve
		если (оставшееся <= 1) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Используйте .then() для извлечения вторичных thenable-объектов (см. gh-3000)
			if (master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Несколько аргументов объединяются как элементы массива Promise.all
		пока ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// Обычно это указывает на ошибку программиста во время разработки.
// Предупреждать о них как можно скорее, а не игнорировать по умолчанию.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Поддержка: только для IE 8-9
	// Консоль существует, когда открыты инструменты разработчика, что может произойти в любой момент.
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




// Функция deferred используется при готовности DOM
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList.then( fn );

	вернуть это;
};

jQuery.extend( {

	// Готов ли DOM к использованию? Установите значение true, как только это произойдет.
	isReady: false,

	// Счетчик для отслеживания количества элементов, которые нужно дождаться перед
	// Событие готовности срабатывает. См. #6781
	readyWait: 1,

	// Удерживайте (или отпускайте) событие готовности
	holdReady: function( hold ) {
		если (держать) {
			jQuery.readyWait++;
		} еще {
			jQuery.ready(true);
		}
	},

	// Обработка готовности DOM
	готово: функция( подождать ) {

		// Прервать, если есть ожидающие подтверждения бронирования или мы уже готовы
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			возвращаться;
		}

		// Помните, что DOM готов
		jQuery.isReady = true;

		// Если сработало обычное событие DOM Ready, уменьшите значение и подождите, если необходимо.
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			возвращаться;
		}

		// Если функции привязаны, выполнить их
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// Обработчик события готовности и метод самоочистки
функция completed() {
	document.removeEventListener("DOMContentLoaded", completed);
	window.removeEventListener("load", completed);
	jQuery.ready();
}

// Обрабатываем случаи вызова $(document).ready()
// после того, как событие браузера уже произошло.
// Поддержка: только для IE <=9 - 10
// Более старые версии Internet Explorer иногда слишком рано сигнализируют о "интерактивном режиме".
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Обрабатывайте это асинхронно, чтобы дать скриптам возможность отложить готовность.
	window.setTimeout( jQuery.ready );

} еще {

	// Используйте удобную функцию обратного вызова события
	document.addEventListener("DOMContentLoaded", completed);

	// Запасной вариант для window.onload, который всегда будет работать.
	window.addEventListener("load", completed);
}




// Многофункциональный метод для получения и установки значений коллекции
// Если это функция, значение/значения могут быть выполнены по желанию.
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Устанавливает множество значений
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Устанавливает одно значение
	} else if (value !== undefined) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		если (массовая загрузка) {

			// Массовые операции выполняются над всем набором данных
			если (raw) {
				fn.call(elems, value);
				fn = null;

			// ...за исключением случаев выполнения значений функций
			} еще {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		если ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					ценить :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	возвращать цепочку?
		элементы:

		// Получает
		масса ?
			fn.call(elems):
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Принимает только:
	// - Узел
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Объект
	// - Любой
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




функция Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	кэш: функция( владелец ) {

		// Проверяем, есть ли у объекта-владельца уже кэш.
		var value = owner[ this.expando ];

		// Если нет, создайте его
		если ( !value ) {
			значение = {};

			// В современных браузерах мы можем принимать данные для узлов, не являющихся элементами.
			// но нам не следует этого делать, см. #8335.
			// Всегда возвращайте пустой объект.
			if (acceptData(owner)) {

				// Если это узел, который вряд ли будет преобразован в строку или обработан в цикле
				// использовать простое присваивание
				if ( owner.nodeType ) {
					владелец[ this.expando ] = значение;

				// В противном случае сохраните его в неперечисляемом свойстве.
				// Для корректной работы свойства параметр configurable должен быть установлен в значение true.
				// удаляется при удалении данных
				} еще {
					Object.defineProperty( owner, this.expando, {
						значение: значение,
						настраиваемый: true
					} );
				}
			}
		}

		возвращаемое значение;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Всегда используйте ключ в стиле camelCase (gh-2257)
		if (typeof data === "string") {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} еще {

			// Копируем свойства по одному в объект кэша
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		возвращаем кэш;
	},
	получить: функцию( владелец, ключ ) {
		return key === undefined ?
			this.cache(owner):

			// Всегда используйте ключ в стиле camelCase (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	доступ: функция( владелец, ключ, значение ) {

		// В случаях, когда:
		//
		// 1. Ключ не указан
		// 2. Был указан строковый ключ, но значение не было предоставлено.
		//
		// Берем путь "чтения" и позволяем методу get определить его.
		// Какое значение следует вернуть, соответственно:
		//
		// 1. Весь объект кэша
		// 2. Данные, хранящиеся по ключу
		//
		если ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// Когда ключ не является строкой или одновременно ключом и значением
		// Задаются, устанавливаются или расширяются (существующие объекты) с помощью одного из следующих способов:
		//
		// 1. Объект свойств
		// 2. Ключ и значение
		//
		this.set( owner, key, value );

		// Поскольку путь "установленного" значения может иметь две возможные точки входа
		// возвращает ожидаемые данные в зависимости от выбранного пути[*]
		Возвращаемое значение !== undefined ? значение : ключ;
	},
	удалить: функция( владелец, ключ ) {
		var i,
			cache = owner[ this.expando ];

		if (cache === undefined) {
			возвращаться;
		}

		if ( key !== undefined ) {

			// Поддерживаются массивы или строки ключей, разделённые пробелами.
			if ( jQuery.isArray( key ) ) {

				// Если key — это массив ключей...
				// Мы всегда устанавливаем ключи в формате camelCase, поэтому удалите это.
				key = key.map( jQuery.camelCase );
			} еще {
				key = jQuery.camelCase( key );

				// Если существует ключ, содержащий пробелы, используйте его.
				// В противном случае создайте массив, сопоставив элементы, не являющиеся пробелами.
				ключ = ключ в кэше?
					[ ключ ] :
					( key.match( rnotwhite ) || [] );
			}

			i = key.length;

			пока ( i-- ) {
				удалить кэш[ ключ[ i ] ];
			}
		}

		// Удалите раскрывающийся список, если данных больше нет.
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Поддержка: Chrome <=35 - 45
			// Производительность Webkit и Blink снижается при удалении свойств.
			// из узлов DOM, поэтому вместо этого установите значение undefined.
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (ошибка ограничена)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} еще {
				удалить владельца[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



// Краткое описание реализации
//
// 1. Обеспечить совместимость интерфейса API и семантики с веткой 1.9.x
// 2. Улучшить удобство сопровождения модуля за счет уменьшения объема памяти.
// пути к одному механизму.
// 3. Используйте один и тот же механизм для поддержки "личных" и "пользовательских" данных.
// 4. _Никогда_ не раскрывайте «приватные» данные пользовательскому коду (TODO: Удалить _data, _removeData)
// 5. Избегайте раскрытия деталей реализации пользовательских объектов (например, свойств Expando).
// 6. Предоставить четкий план обновления реализации до WeakMap в 2014 году

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

function dataAttr( elem, key, data ) {
	имя переменной;

	// Если ничего не найдено внутри, попытаемся получить доступ к чему-либо.
	// данные из атрибута data-* HTML5
	if (data === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if (typeof data === "string") {
			пытаться {
				данные = данные === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Преобразовывать в число только в том случае, если это не изменяет строку.
					+data + "" === data ? +data :
					rbrace.test(data) ? JSON.parse(data) :
					данные;
			} catch ( e ) {}

			// Убедитесь, что мы задали данные таким образом, чтобы они не были изменены позже.
			dataUser.set( elem, key, data );
		} еще {
			данные = неопределено;
		}
	}
	возвращаемые данные;
}

jQuery.extend( {
	hasData: function( elem ) {
		вернуть dataUser.hasData(elem) || dataPriv.hasData(элемент);
	},

	данные: функция( elem, name, data ) {
		return dataUser.access(elem, name, data);
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Теперь, когда все вызовы _data и _removeData заменены
	// При прямом вызове методов dataPriv эти методы могут быть признаны устаревшими.
	_data: function( elem, name, data ) {
		return dataPriv.access(elem, name, data);
	},

	_removeData: function( elem, name ) {
		dataPriv.remove(элемент, имя);
	}
} );

jQuery.fn.extend( {
	данные: функция( ключ, значение ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Получает все значения
		если (key === undefined) {
			если (this.length) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					пока ( i-- ) {

						// Поддержка: только для IE 11
						// Элементы attrs могут быть пустыми (#14894)
						if ( attrs[ i ] ) {
							имя = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set(elem, "hasDataAttrs", true);
				}
			}

			возвращаемые данные;
		}

		// Устанавливает несколько значений
		if (typeof key === "object") {
			return this.each(function() {
				dataUser.set(this, key);
			} );
		}

		return access(this, function(value) {
			переменные данные;

			// Вызывающий объект jQuery (соответствующий элемент) не пуст.
			// (и, следовательно, элемент появляется в this[0]) и
			// Параметр `value` не был неопределен. Пустой объект jQuery.
			// приведет к `undefined` для элемента = this[ 0 ], что
			// Выбрасывает исключение, если предпринимается попытка чтения данных из кэша.
			if (elem && value === undefined ) {

				// Попытка получить данные из кэша
				// В данных ключ всегда будет в формате camelCase.
				data = dataUser.get( elem, key );
				if (data !== undefined) {
					возвращаемые данные;
				}

				// Попытка "обнаружить" данные в
				// Пользовательские атрибуты data-* в HTML5
				data = dataAttr( elem, key );
				if (data !== undefined) {
					возвращаемые данные;
				}

				// Мы очень старались, но данных не существует.
				возвращаться;
			}

			// Установить данные...
			this.each( function() {

				// Мы всегда храним ключ в формате camelCase
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	очередь: функция( elem, type, data ) {
		переменная очередь;

		если (elem) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Ускорьте извлечение из очереди, быстро выйдя из нее, если это просто поиск.
			если (данные) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} еще {
					queue.push(data);
				}
			}
			возвращаем очередь || [];
		}
	},

	dequeue: function( elem, type ) {
		тип = тип || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue(elem, type);
			};

		// Если очередь эффектов извлечена, всегда удаляйте индикатор прогресса.
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			начальная длина--;
		}

		если ( fn ) {

			// Добавить индикатор выполнения, чтобы предотвратить загрузку очереди эффектов.
			// автоматически извлекается из очереди
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Очистить последнюю функцию остановки очереди
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Не является публичным объектом - сгенерируйте объект queueHooks или верните текущий объект.
	_queueHooks: function( elem, type ) {
		ключ var = тип + «queueHooks»;
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove(elem, [type + "queue", key]);
			} )
		} );
	}
} );

jQuery.fn.extend( {
	очередь: функция( тип, данные ) {
		var setter = 2;

		if (typeof type !== "string") {
			данные = тип;
			тип = "fx";
			сеттер--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		возвращаемые данные === неопределено ?
			этот :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Обеспечьте наличие обработчиков событий для этой очереди
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Обеспечить разрешение промиса при наличии очередей определенного типа
	// обнуляются (fx — это тип по умолчанию)
	обещание: функция( тип, объект ) {
		var tmp,
			количество = 1,
			defer = jQuery.Deferred(),
			элементы = это,
			i = this.length,
			resolve = function() {
				если ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if (typeof type !== "string") {
			obj = type;
			тип = не определен;
		}
		тип = тип || "fx";

		пока ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if (tmp && tmp.empty) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		решать();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Верх", "Справа", "Низ", "Слева" ];

вар isHiddenWithinTree = функция (элем, эль) {

		// Функция isHiddenWithinTree может быть вызвана из функции jQuery#filter;
		// В этом случае элемент будет вторым аргументом
		elem = el || elem;

		// Встроенный стиль имеет приоритет над всем остальным
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// В противном случае проверьте вычисленный стиль
			// Поддержка: Firefox <=43 - 45
			// Для отключенных элементов может быть установлено значение `display: none`, поэтому сначала убедитесь, что элемент является отключенным.
			// в документе.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		старый = {};

	// Сохраняем старые значения и вставляем новые.
	для (имя в параметрах) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Восстановить старые значения
	для (имя в параметрах) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	переменная скорректирована,
		масштаб = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Для возможных несоответствий единиц измерения требуется вычисление начального значения.
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Единицы доверия, указанные в jQuery.css
		единица = единица || начальныйInUnit[3];

		// Убедитесь, что мы обновим свойства анимации позже.
		valueParts = valueParts || [];

		// Итеративное приближение из ненулевой начальной точки
		initialInUnit = +initial || 1;

		делать {

			// Если предыдущая итерация обнулила значение, удваиваем до тех пор, пока не получим *что-нибудь*.
			// Используйте строку для удвоения, чтобы случайно не увидеть масштаб как неизмененный ниже
			масштаб = масштаб || ".5";

			// Настройте и примените
			initialInUnit = initialInUnit / scale;
			jQuery.style(elem, prop, InitialInUnit + unit);

		// Обновляем масштаб, допуская значения ноль или NaN из tween.cur()
		// Прервать цикл, если масштаб остаётся неизменным или идеальным, или если нам просто надоело.
		} пока (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if (valueParts) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Применить относительное смещение (+=/-=), если указано
		скорректированное значение = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		если (tween) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	возврат скорректирован;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		документ = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	если (display) {
		вернуть дисплей;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) ),
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild(временно);

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	вернуть дисплей;
}

function showHide( elements, show ) {
	var display, elem,
		значения = [],
		индекс = 0,
		длина = elements.length;

	// Определяем новое значение отображения для элементов, которые необходимо изменить
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			продолжать;
		}

		display = elem.style.display;
		если (показать) {

			// Поскольку мы принудительно устанавливаем видимость для элементов, скрытых каскадно, это приводит к немедленному (и медленному) сбою.
			// Проверка необходима в этом первом цикле, если только у нас нет непустого отображаемого значения (либо
			(встроенный или подлежащий восстановлению)
			if ( display === "none" ) {
				значения[индекс] = dataPriv.get(elem, «отображение») || нулевой;
				если ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} еще {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Помните, что мы перезаписываем
				dataPriv.set(элемент, «дисплей», дисплей);
			}
		}
	}

	// Установите отображение элементов во втором цикле, чтобы избежать постоянного переформатирования.
	for ( index = 0; index < length; index++ ) {
		if (values[index] != null) {
			elements[ index ].style.display = values[ index ];
		}
	}

	возвращать элементы;
}

jQuery.fn.extend( {
	показать: функция() {
		return showHide( this, true );
	},
	скрыть: функция() {
		return showHide( this );
	},
	toggle: function( state ) {
		if (typeof state === "boolean") {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} еще {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// Для поддержки XHTML необходимо закрыть эти теги (#13200)
var wrapMap = {

	// Поддержка: только для IE <=9
	вариант: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML-парсеры не вставляют элементы автоматически.
	// Так же, как и парсеры тегов. Поэтому мы не можем сократить
	// Это достигается путем пропуска <tbody> или других обязательных элементов.
	заголовок: [ 1, "<таблица>", "</таблица>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Поддержка: только для IE <=9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Поддержка: только для IE <=9 - 11
	// Используйте typeof, чтобы избежать вызова методов без аргументов для объектов хоста (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		рет;
}


// Пометить скрипты как уже выполненные
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			элементы[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[i], «globalEval»)
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		фрагмент = context.createDocumentFragment(),
		узлы = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if (elem || elem === 0 ) {

			// Добавляйте узлы напрямую
			if ( jQuery.type( elem ) === "object" ) {

				// Поддержка: только Android <=4.0, только PhantomJS 1
				// push.apply(_, arraylike) вызывает ошибку в устаревшем WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Преобразует не-HTML-код в текстовый узел
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Преобразовать HTML в узлы DOM
			} еще {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Десериализация стандартного представления
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Проходим вниз через обертки к нужному содержимому
				j = wrap[ 0 ];
				пока ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Поддержка: только Android <=4.0, только PhantomJS 1
				// push.apply(_, arraylike) вызывает ошибку в устаревшем WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Запомните контейнер верхнего уровня
				tmp = fragment.firstChild;

				// Убедитесь, что созданные узлы являются "осиротевшими" (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Удалить обертку из фрагмента
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Пропустить элементы, уже находящиеся в коллекции контекста (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			если (игнорируется) {
				ignored.push( elem );
			}
			продолжать;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Добавить к фрагменту
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Сохранение истории выполнения скрипта
		если (содержит) {
			setGlobalEval( tmp );
		}

		// Захват исполняемых файлов
		если (scripts) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	возвращаемый фрагмент;
}


(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement("input");

	// Поддержка: только Android 4.0 - 4.3
	// Проверка состояния на предмет потери, если имя задано (#11217)
	// Поддержка: веб-приложения Windows (WWA)
	// Для WWA необходимо использовать .setAttribute для `name` и `type` (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Поддержка: только для Android <=4.1
	// Более старые версии WebKit некорректно клонируют состояние "checked" во фрагментах.
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Поддержка: только для IE <=11
	// Убедитесь, что значение по умолчанию для текстового поля (и флажка) корректно клонировано.
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
вар documentElement = document.documentElement;



вар
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	вернуть true;
}

function returnFalse() {
	вернуть false;
}

// Поддержка: только для IE <=9
// См. #13393 для получения дополнительной информации
function safeActiveElement() {
	пытаться {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Типы могут представлять собой карту типов/обработчиков
	if (typeof types === "object") {

		// (типы: Объект, селектор, данные)
		if ( typeof selector !== "string" ) {

			// (types-Object, data)
			данные = данные || селектор;
			селектор = не определен;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		вернуть элемент;
	}

	if (data == null && fn == null) {

		// (types, fn)
		fn = селектор;
		данные = селектор = неопределено;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// (типы, селектор, функция)
			fn = данные;
			данные = неопределено;
		} еще {

			// (types, data, fn)
			fn = данные;
			данные = селектор;
			селектор = не определен;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		вернуть элемент;
	}

	если ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Можно использовать пустой набор, поскольку событие содержит информацию.
			jQuery().off(event);
			return origFn.apply( this, arguments );
		};

		// Используйте тот же GUID, чтобы вызывающая сторона могла удалить объект, используя origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Вспомогательные функции для управления событиями — не являются частью публичного интерфейса.
 * Благодарим библиотеку addEvent Дина Эдвардса за многие идеи.
 */
jQuery.event = {

	глобальный: {},

	добавить: функцию( elem, types, handler, data, selector ) {

		вар handleObjIn, eventHandle, tmp,
			события, t, handleObj,
			специальный, обработчики, тип, пространства имен, origType,
			elemData = dataPriv.get(elem);

		// Не прикрепляйте события к узлам noData или text/comment (но допускайте обычные объекты)
		if ( !elemData ) {
			возвращаться;
		}

		// Вызывающая сторона может передать объект пользовательских данных вместо обработчика.
		if (handler.handler) {
			handleObjIn = обработчик;
			обработчик = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Обеспечьте, чтобы недопустимые селекторы вызывали исключения во время прикрепления.
		// Проверяем значение по documentElement в случае, если elem является узлом, не являющимся элементом (например, document).
		если (селектор) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Убедитесь, что обработчик имеет уникальный идентификатор, который будет использоваться для его последующего поиска/удаления.
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Инициализируем структуру событий элемента и основной обработчик, если это первый обработчик.
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Отбрасываем второе событие jQuery.event.trigger() и
				// Когда событие вызывается после выгрузки страницы
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Обработка нескольких событий, разделенных пробелом
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		пока (t--) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			тип = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Тип *обязательно* должен быть указан, нельзя прикреплять обработчики, относящиеся только к пространству имен.
			если ( !type ) {
				продолжать;
			}

			// Если тип события изменяется, используйте специальные обработчики событий для изменившегося типа.
			special = jQuery.event.special[ type ] || {};

			// Если определен селектор, укажите тип API специального события, в противном случае — заданный тип.
			тип = ( селектор ? специальный.делегатТип : специальный.привязкаТип ) || тип;

			// Обновить специальные настройки в зависимости от нового сброшенного типа
			special = jQuery.event.special[ type ] || {};

			// handleObj передается всем обработчикам событий
			handleObj = jQuery.extend( {
				тип: тип,
				origType: origType,
				данные: данные,
				обработчик: обработчик,
				guid: handler.guid,
				селектор: селектор,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				пространство имен: пространства имен.join( "." )
			}, handleObjIn );

			// Инициализируем очередь обработчиков событий, если мы первые.
			если ( !( обработчики = события[ тип ] ) ) {
				обработчики = события[ тип ] = [];
				handlers.delegateCount = 0;

				// Используйте addEventListener только в том случае, если обработчик специальных событий возвращает false.
				если ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if (elem.addEventListener) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if (special.add) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Добавить в список обработчиков элемента, делегируя вызов перед ним.
			если (селектор) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} еще {
				handlers.push( handleObj );
			}

			// Отслеживайте, какие события когда-либо использовались, для оптимизации событий.
			jQuery.event.global[ type ] = true;
		}

	},

	// Отделить событие или набор событий от элемента
	удалить: функция( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			события, t, handleObj,
			специальный, обработчики, тип, пространства имен, origType,
			elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

		if ( !elemData || !( events = elemData.events ) ) {
			возвращаться;
		}

		// Один раз для каждого type.namespace в types; type может быть опущен.
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		пока (t--) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			тип = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Отменить привязку всех событий (в этом пространстве имен, если оно указано) для элемента
			если ( !type ) {
				для (введите события) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				продолжать;
			}

			special = jQuery.event.special[ type ] || {};
			тип = ( селектор ? специальный.делегатТип : специальный.привязкаТип ) || тип;
			обработчики = события[ тип ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Удалить соответствующие события
			origCount = j = handlers.length;
			пока ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Удаляем универсальный обработчик событий, если мы что-то удалили и больше нет обработчиков.
			// (позволяет избежать потенциальной бесконечной рекурсии при удалении обработчиков специальных событий)
			if ( origCount && !handlers.length ) {
				если ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				удалить события[ тип ];
			}
		}

		// Удалите данные и компонент expando, если они больше не используются.
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove(elem, "handle events");
		}
	},

	dispatch: function( nativeEvent ) {

		// Создаем записываемый объект jQuery.Event из нативного объекта события
		var event = jQuery.event.fix( nativeEvent );

		вар я, j, ret, соответствует, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			обработчики = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Используйте исправленный jQuery.Event вместо (только для чтения) нативного события.
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Вызываем обработчик preDispatch для сопоставленного типа и позволяем ему завершить работу при необходимости.
		if (special.preDispatch && special.preDispatch.call(this, event) === false) {
			возвращаться;
		}

		// Определение обработчиков
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Сначала запустите делегатов; возможно, они захотят остановить распространение под нами.
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Запускаемое событие должно либо 1) не иметь пространства имен, либо 2) иметь пространство(я) имен.
				// Подмножество или равное подмножеству в связанном событии (оба могут не иметь пространства имен).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler).apply(matched.elem, args);

					if (ret !== undefined) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Вызываем хук postDispatch для сопоставленного типа
		if (special.postDispatch) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	обработчики: функция( событие, обработчики ) {
		вар я, совпадения, сел, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Поддержка: IE <=9
		// Найти обработчики делегатов
		// Деревья экземпляров SVG с черной дырой <use> (#13180)
		//
		// Поддержка: Firefox <=42
		// Избегать событий, не связанных с нажатием левой кнопки мыши, в Firefox, но не блокировать события радиокнопок в Internet Explorer (#3861, gh-2343)
		if (delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Не проверять неэлементы (#13208)
				// Не обрабатывать клики по отключенным элементам (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Не конфликтовать со свойствами Object.prototype (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Добавить оставшиеся (непосредственно связанные) обработчики
		if (delegateCount < handlers.length) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			перечислимый: true,
			настраиваемый параметр: true,

			получить: jQuery.isFunction( hook ) ?
				функция() {
					if (this.originalEvent) {
							return hook( this.originalEvent );
					}
				} :
				функция() {
					if (this.originalEvent) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					перечислимый: true,
					настраиваемый параметр: true,
					Доступно для записи: true,
					значение: значение
				} );
			}
		} );
	},

	исправление: функция( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	особенный: {
		нагрузка: {

			// Предотвращает всплытие событий image.load на window.load
			noBubble: true
		},
		фокус: {

			// По возможности запускайте собственное событие, чтобы обеспечить корректную последовательность размытия/фокусировки.
			триггер: функция() {
				if (this !== safeActiveElement() && this.focus) {
					this.focus();
					вернуть false;
				}
			},
			delegateType: "focusin"
		},
		размытие: {
			триггер: функция() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					вернуть false;
				}
			},
			delegateType: "focusout"
		},
		клик: {

			// Для флажка запускаем собственное событие, чтобы состояние "отмечено" было правильным
			триггер: функция() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					вернуть false;
				}
			},

			// Для обеспечения кроссбраузерной совместимости не следует вызывать нативный метод .click() для ссылок.
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		перед загрузкой: {
			postDispatch: function( event ) {

				// Поддержка: Firefox 20+
				// Firefox не выводит сообщение об ошибке, если поле returnValue не задано.
				if (event.result !== undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// Этот оператор "if" необходим для обычных объектов
	if (elem.removeEventListener) {
		elem.removeEventListener(тип, дескриптор);
	}
};

jQuery.Event = function( src, props ) {

	// Разрешить создание экземпляра без ключевого слова 'new'
	если ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Объект события
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// События, всплывающие в документе, могли быть помечены как предотвращенные
		// обработчиком, расположенным ниже по дереву; отобразить правильное значение.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Поддержка: только для Android <=2.3
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Создание свойств целевого объекта
		// Поддержка: только Safari версий <=6 - 7
		// Целевой узел не должен быть текстовым (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Тип события
	} еще {
		this.type = src;
	}

	// Добавляем явно заданные свойства к объекту события
	если (props) {
		jQuery.extend( this, props );
	}

	// Создает метку времени, если у входящего события ее нет.
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Отметить как исправленное
	this[ jQuery.expando ] = true;
};

// jQuery.Event основан на событиях DOM3, как указано в языковой привязке ECMAScript.
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	конструктор: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Включает все общие свойства событий, в том числе свойства, специфичные для KeyEvent и MouseEvent.
jQuery.each( {
	altKey: true,
	пузырьки: правда,
	отменяемый: true,
	changedTouchs: true,
	CtrlKey: true,
	подробности: верно,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	ключ: true,
	keyCode: true,
	кнопка: true,
	кнопки: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouchs: true,
	toElement: true,
	касания: истинно,

	который: функция( событие ) {
		var button = event.button;

		// Добавьте which для ключевых событий
		if (event.which == null && rkeyEvent.test(event.type)) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Добавьте which для клика: 1 === влево; 2 === посередине; 3 === вправо
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Создание событий mouseenter/leave с использованием mouseover/out и проверок времени события
// чтобы делегирование событий работало в jQuery.
// Сделайте то же самое для pointerenter/pointerleave и pointerover/pointerout
//
// Поддержка: только Safari 7
// Safari слишком часто отправляет команду mouseenter; см.:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// Описание ошибки (она существовала и в более старых версиях Chrome).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				цель = это,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// При появлении/исключении курсора мыши вызывается обработчик, если элемент находится за пределами целевого объекта.
			// Примечание: Связанный объект не отображается, если курсор мыши покинул/вошел в окно браузера.
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	один: функция( типы, селектор, данные, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// (событие) отправлено jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			вернуть это;
		}
		if (typeof types === "object") {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			вернуть это;
		}
		if ( selector === false || typeof selector === "function" ) {

			// (types [, fn] )
			fn = селектор;
			селектор = не определен;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


вар
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([az][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	// Поддержка: IE <=10 - 11, Edge 12 - 13
	// В IE/Edge использование групп регулярных выражений здесь приводит к значительному замедлению работы.
	// См. https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" или checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	вернуть элемент;
}

// Заменить/восстановить атрибут type элементов скрипта для безопасного манипулирования DOM
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	вернуть элемент;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	если (соответствует) {
		elem.type = match[ 1 ];
	} еще {
		elem.removeAttribute( "type" );
	}

	вернуть элемент;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if (dest.nodeType !== 1) {
		возвращаться;
	}

	// 1. Копирование закрытых данных: событий, обработчиков и т. д.
	если ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set(dest, pdataOld);
		events = pdataOld.events;

		если (события) {
			удалить pdataCur.handle;
			pdataCur.events = {};

			для (введите события) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Скопировать данные пользователя
	if (dataUser.hasData(src)) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Исправлены ошибки в Internet Explorer, см. тесты поддержки.
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Не удаётся сохранить состояние флажка или переключателя, установленного в нужном месте.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Не удаётся вернуть выбранный параметр в состояние по умолчанию при клонировании параметров.
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Сглаживание любых вложенных массивов
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		значение = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// В WebKit мы не можем клонировать фрагменты Node, содержащие checked.
	если ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[0] = value.call(this, index, self.html());
			}
			domManip( self, args, callback, ignored );
		} );
	}

	если ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			фрагмент = первый;
		}

		// Для вызова функции обратного вызова требуется либо новый контент, либо интерес к игнорируемым элементам.
		если (первый || проигнорирован) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Используйте исходный фрагмент для последнего элемента
			// вместо первого, потому что это может привести к
			// В некоторых ситуациях происходит некорректное опорожнение (#8070).
			for ( ; i < l; i++ ) {
				узел = фрагмент;

				если (i !== iNoClone) {
					node = jQuery.clone( node, true, true );

					// Сохраняйте ссылки на клонированные скрипты для последующего восстановления
					if ( hasScripts ) {

						// Поддержка: только Android <=4.0, только PhantomJS 1
						// push.apply(_, arraylike) вызывает ошибку в устаревшем WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Повторное включение скриптов
				jQuery.map( scripts, restoreScript );

				// Выполнять исполняемые скрипты при первой вставке документа
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access(узел, "globalEval") &&
						jQuery.contains( doc, node ) ) {

						if (node.src) {

							// Необязательная зависимость для AJAX, но скрипты не будут запускаться, если она отсутствует.
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} еще {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	возврат товара;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData(getAll(узел));
		}

		if (node.parentNode) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval(getAll(узел, "скрипт"));
			}
			node.parentNode.removeChild( node );
		}
	}

	вернуть элемент;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: ​​function( elem, dataAndEvents, deepDataAndEvents ) {
		вар я, л, srcElements, destElements,
			клон = elem.cloneNode(true),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Исправление проблем с клонированием в Internet Explorer
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// В данном случае мы отказываемся от использования Sizzle по соображениям производительности: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Скопировать события из оригинала в клон
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || ПолучитьВсе(Элемент);
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} еще {
				cloneCopyEvent( elem, clone );
			}
		}

		// Сохранение истории выполнения скрипта
		destElements = getAll( clone, "script" );
		if (destElements.length > 0) {
			setGlobalEval( destElements, !inPage && getAll(elem, "script" ) );
		}

		// Возвращает клонированный набор
		вернуть клон;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			специальный = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if (acceptData(elem)) {
				если ( ( данные = элемент [ dataPriv.expando ] ) ) {
					if (data.events) {
						for ( type in data.events ) {
							если (special[type]) {
								jQuery.event.remove( elem, type );

							// Это упрощенный способ избежать накладных расходов, связанных с jQuery.event.remove.
							} еще {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Поддержка: Chrome <=35 - 45+
					// Вместо использования delete присваивайте значение undefined, см. Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if (elem[dataUser.expando]) {

					// Поддержка: Chrome <=35 - 45+
					// Вместо использования delete присваивайте значение undefined, см. Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	отсоединить: функция( селектор) {
		return remove( this, selector, true );
	},

	удалить: функция( селектор) {
		return remove( this, selector );
	},

	текст: функция( значение ) {
		return access(this, function(value) {
			Возвращаемое значение === не определено?
				jQuery.text(this):
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	добавить: функция() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	добавить в начало: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	перед: функция() {
		return domManip( this, arguments, function( elem ) {
			if (this.parentNode) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	после: функция() {
		return domManip( this, arguments, function( elem ) {
			if (this.parentNode) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	пустой: функция() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if (elem.nodeType === 1) {

				// Предотвращение утечек памяти
				jQuery.cleanData(getAll(elem, false));

				// Удалите все оставшиеся узлы
				elem.textContent = "";
			}
		}

		вернуть это;
	},

	clone: ​​function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null? ложь: данныеAndEvents;
		deepDataAndEvents = deepDataAndEvents == null? данныеAndEvents: deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access(this, function(value) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if (value === undefined && elem.nodeType === 1) {
				return elem.innerHTML;
			}

			// Попробуем сократить путь и использовать только innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				пытаться {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Удаляет узлы элементов и предотвращает утечки памяти
						if (elem.nodeType === 1) {
							jQuery.cleanData(getAll(elem, false));
							elem.innerHTML = value;
						}
					}

					элемент = 0;

				// Если использование innerHTML вызывает исключение, используйте резервный метод.
				} catch ( e ) {}
			}

			если (elem) {
				this.empty().append(value);
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Внесите изменения, заменив каждый не игнорируемый элемент контекста новым содержимым.
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				если (родитель) {
					parent.replaceChild( elem, this );
				}
			}

		// Принудительный вызов функции обратного вызова
		}, игнорируется );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Поддержка: только Android <=4.0, только PhantomJS 1
			// .get() потому что push.apply(_, arraylike) вызывает ошибку в устаревшем WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack(ret);
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var getStyles = function( elem ) {

		// Поддержка: только IE <=11, Firefox <=30 (#15098, #14150)
		// Internet Explorer выдает ошибку при отображении элементов, созданных во всплывающих окнах.
		// В то же время FF обрабатывает элементы фрейма с помощью метода "defaultView.getComputedStyle".
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			вид = окно;
		}

		return view.getComputedStyle(elem);
	};



(function() {

	// Для выполнения тестов pixelPosition и boxSizingReliable требуется только один макет.
	// Таким образом, они выполняются одновременно, чтобы избежать второго вычисления.
	function computeStyleTests() {

		// Это синглтон, его нужно выполнить только один раз.
		если ( !div ) {
			возвращаться;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"верх:1%; ширина:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Поддержка: только Android 4.0 - 4.3, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Поддержка: только Android 4.0 - 4.3
		// Некоторые стили возвращают значения в процентах, хотя этого быть не должно.
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Обнуляем div, чтобы он не сохранялся в памяти.
		// Это также будет признаком того, что проверки уже были выполнены
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement("div")
		div = document.createElement("div");

	// Завершение работы досрочно в средах с ограниченными возможностями (не браузерных)
	если ( !div.style ) {
		возвращаться;
	}

	// Поддержка: только для IE <=9 - 11
	// Стиль клонированного элемента влияет на клонированный исходный элемент (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend(support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	ширина вар, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Поддержка: только для IE <=9
	// Функция getPropertyValue необходима только для .css('filter') (#12537)
	если (вычислено) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Посвящение «потрясающей разработке Дина Эдвардса»
		// Браузер Android возвращает процентное значение для некоторых параметров.
		// Но ширина, похоже, измеряется в пикселях.
		// Это противоречит проекту спецификации CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Сохраняем исходные значения
			ширина = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Введите новые значения, чтобы получить вычисленное значение.
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Отменить измененные значения
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}
	
	return ret !== undefined ?

		// Поддержка: только для IE <=9 - 11
		// IE возвращает значение zIndex в виде целого числа.
		рет + "" :
		рет;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Определяем хук, проверим при первом запуске, действительно ли он необходим.
	возвращаться {
		получить: функция() {
			if (conditionFn()) {

				// Хук не нужен (или его невозможно использовать из-за
				// (для отсутствующей зависимости), удалите её.
				удалить this.get;
				возвращаться;
			}

			// Необходим хук; переопределите его так, чтобы проверка поддержки не выполнялась повторно.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


вар

	// Можно заменить, если на дисплее ничего не отображается или он начинается с table
	// кроме "table", "table-cell" или "table-caption"
	// См. здесь информацию о значениях для отображения: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement("div").style;

// Возвращает свойство CSS, сопоставленное с свойством, которое может иметь префикс поставщика.
function vendorPropName( name ) {

	// Сокращенное название для имен, не имеющих префикса поставщика
	if ( name in emptyStyle ) {
		возвращаемое имя;
	}

	// Проверка наличия префиксов в названиях поставщиков
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	пока ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			возвращаемое имя;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Все относительные значения (+/-) уже были указаны
	// нормализовано в этой точке
	var matches = rcssNum.exec( value );
	ответные матчи?

		// Защита от неопределенного значения переменной «subtract», например, при использовании в cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		ценить;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === (isBorderBox? «граница»: «содержимое»)?

		// Если у нас уже есть правильные измерения, избегайте аугментации.
		4:

		// В противном случае выполните инициализацию горизонтальных или вертикальных свойств.
		имя === "ширина" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Обе модели блоков не содержат полей, поэтому добавим их, если они нам нужны.
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box включает отступы, поэтому удалите их, если нам нужно содержимое.
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// На данном этапе extra не является ни границей, ни отступом, поэтому удаляем border.
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} еще {

			// На данном этапе extra не является содержимым, поэтому добавьте отступы.
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// На данном этапе extra не является ни содержимым, ни отступом, поэтому добавьте border.
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Начнем со свойства offset, которое эквивалентно значению border-box.
	var val,
		valueIsBorderBox = true,
		styles = getStyles(elem),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Поддержка: только для IE <=11
	// Выполнение функции getBoundingClientRect на отключенном узле
	// В Internet Explorer выдает ошибку.
	if (elem.getClientRects().length) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Некоторые не-HTML элементы возвращают undefined для offsetWidth, поэтому проверяем наличие null/undefined.
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if (val <= 0 || val == null) {

		// При необходимости использовать сначала вычисляемый, а затем невычисляемый CSS.
		val = curCSS( elem, name, styles );
		if (val < 0 || val == null) {
			val = elem.style[ name ];
		}

		// Единица измерения — не пиксели. Остановитесь здесь и вернитесь.
		if (rnumnonpx.test(val)) {
			return val;
		}

		// Проверка стиля на случай, если браузер возвращает ненадежные значения.
		// Метод getComputedStyle молча возвращается к надежному методу elem.style
		значениеIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Нормализовать "", auto и подготовиться к дополнительному
		val = parseFloat(val) || 0;
	}

	// Используйте модель activebox-size для добавления/удаления ненужных стилей
	return ( val +
		augmentWidthOrHeight(
			элемент,
			имя,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			стили
		)
	) + "px";
}

jQuery.extend( {

	// Добавьте в свойства стиля обработчики для переопределения значения по умолчанию
	// Поведение при получении и установке свойства стиля
	cssHooks: {
		непрозрачность: {
			получить: функцию( elem, computed ) {
				если (вычислено) {

					// Мы всегда должны получать числовой результат от параметра opacity.
					var ret = curCSS(elem, «непрозрачность»);
					return ret === "" ? «1»: в отставку;
				}
			}
		}
	},

	// Не следует автоматически добавлять "px" к этим свойствам, которые могут быть безразмерными.
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"непрозрачность": истинно,
		"order": true,
		"сироты": правда,
		"вдовы": правда,
		"zIndex": true,
		"zoom": true
	},

	// Добавьте свойства, имена которых вы хотите исправить перед этим
	// установка или получение значения
	cssProps: {
		"float": "cssFloat"
	},

	// Получение и установка свойства style для узла DOM
	стиль: функция( elem, name, value, extra ) {

		// Не задавайте стили для текстовых и комментаторских узлов
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			возвращаться;
		}

		// Убедитесь, что мы работаем с правильным именем
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		имя = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Получает хук для версии с префиксом, затем для версии без префикса
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Проверяем, устанавливаем ли мы значение
		если (значение !== undefined) {
			тип = тип значения;

			// Преобразование "+=" или "-=" в относительные числа (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Исправлена ​​ошибка #9237
				тип = "число";
			}

			// Убедитесь, что значения null и NaN не установлены (#7116)
			if (value == null || value !== value) {
				возвращаться;
			}

			// Если передано число, добавьте единицу измерения (за исключением некоторых свойств CSS)
			если (type === "number") {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Свойства background-* влияют на значения исходного клона
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// Если был предоставлен хук, используйте это значение, в противном случае просто установите указанное значение.
			if ( !hooks || !( "set" in hooks ) ||
				(value = hooks.set(elem, value, extra)) !== undefined) {

				style[ name ] = value;
			}

		} еще {

			// Если был предоставлен обработчик, получите невычисленное значение оттуда.
			если ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// В противном случае просто получите значение из объекта стиля
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Убедитесь, что мы работаем с правильным именем
		имя = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Попробуйте сначала ввести имя с префиксом, а затем имя без префикса.
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Если был предоставлен хук, получите вычисленное значение оттуда.
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// В противном случае, если существует способ получить вычисленное значение, используйте его.
		if (val === undefined) {
			val = curCSS( elem, name, styles );
		}

		// Преобразовать значение "normal" в вычисленное значение
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Преобразовать в числовой формат, если это необходимо или был указан квалификатор, и значение выглядит как числовое.
		если ( extra === "" || extra ) {
			num = parseFloat( val );
			вернуть дополнительно === true || isFinite (число)? число || 0: значение;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			если (вычислено) {

				// Некоторые элементы могут содержать информацию о размерах, если мы отображаем их невидимым образом.
				// но у него должен быть текущий стиль отображения, который бы это выиграл
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Поддержка: Safari 8+
					// В Safari столбцы таблицы имеют ненулевое значение offsetWidth и нулевое значение.
					// getBoundingClientRect().width, если не изменено значение display.
					// Поддержка: только для IE <=11
					// Выполнение функции getBoundingClientRect на отключенном узле
					// В Internet Explorer выдает ошибку.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				вычесть = extra && augmentWidthOrHeight(
					элемент,
					имя,
					дополнительный,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					стили
				);

			// Преобразовать в пиксели, если требуется корректировка значения
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber(elem, value, subtract);
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		если (вычислено) {
			return ( parseFloat(curCSS(elem, "marginLeft")) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Эти хуки используются анимацией для расширения свойств
jQuery.each( {
	допуск: "",
	отступ: "",
	граница: "Ширина"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				расширенный = {},

				// Если это не строка, предполагается, что это одно число.
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					части[ i ] || части[ i - 2 ] || части[ 0 ];
			}

			возврат расширен;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				вернуться на карту;
			}

			Возвращаемое значение !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	конструктор: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing[ this.easing ](
				процент, this.options.duration * процент, 0, 1, this.options.duration
			);
		} еще {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if (this.options.step) {
			this.options.step.call( this.elem, this.now, this );
		}

		if (hooks && hooks.set ) {
			hooks.set( this );
		} еще {
			Tween.propHooks._default.set( this );
		}
		вернуть это;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_по умолчанию: {
		получить: функцию( твин ) {
			результат переменной;

			// Используйте свойство непосредственно элемента, если он не является элементом DOM.
			// или когда не существует соответствующего свойства стиля.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Передача пустой строки в качестве третьего параметра в .css автоматически
			// Попытка преобразования в тип parseFloat, в случае неудачи — в тип string.
			// Простые значения, такие как "10px", преобразуются в тип Float;
			// Комплексные значения, такие как "rotate(1rad)", возвращаются как есть.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Пустые строки, null, undefined и "auto" преобразуются в 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Используйте шаговый хук для обратной совместимости.
			// Используйте cssHook, если он есть.
			// Используйте .style, если он доступен, и обычные свойства, если они доступны.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} еще {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Поддержка: только для IE <=9
// Подход, основанный на панике, для установки параметров на отключенных узлах
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	линейный: функция( p ) {
		вернуть p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_по умолчанию: "качели"
};

jQuery.fx = Tween.prototype.init;

// Обратная совместимость с точкой расширения <1.8
jQuery.fx.step = {};




вар
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

функция raf() {
	if (timerId) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Анимации, созданные синхронно, будут выполняться синхронно.
function createFxNow() {
	window.setTimeout(function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Генерация параметров для создания стандартной анимации
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// Если мы укажем ширину, значение шага будет равно 1, чтобы применить все значения cssExpand.
	// В противном случае значение шага равно 2, чтобы пропустить левую и правую стороны.
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = type;
	}

	возвращаемые атрибуты;
}

function createTween( value, prop, animation ) {
	var tween,
		коллекция = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		индекс = 0,
		длина = коллекция.длина;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// Мы закончили работу с этим свойством
			возврат в промежуток;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		аним = это,
		orig = {},
		стиль = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Анимации, пропускающие очередь, перехватывают хуки эффектов
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if (hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Убедитесь, что обработчик завершения вызван до завершения этого процесса.
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Обнаружение анимаций показа/скрытия
	for ( prop in props ) {
		значение = props[ prop ];
		if (rfxtypes.test(value)) {
			удалить свойства[свойство];
			toggle = toggle || value === "toggle";
			if (value === (hidden ? "hide" : "show")) {

				// Если это "шоу", притворитесь, что вас не видно.
				// Сохранились данные после остановки показа/скрытия
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Игнорировать все остальные данные, не выполняющие никаких действий при отображении/скрытии
				} еще {
					продолжать;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style(элемент, опора);
		}
	}

	// Прервать выполнение, если это ничего не делает, например, .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		возвращаться;
	}

	// Ограничить использование стилей "overflow" и "display" во время анимации блоков.
	if ( isBox && elem.nodeType === 1 ) {

		// Поддержка: IE <=9 - 11, Edge 12 - 13
		// Записываем все 3 атрибута переполнения, поскольку Internet Explorer не определяет сокращенную запись.
		// из идентичных значений overflowX и overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Определяем тип отображения, отдавая предпочтение старым данным о показе/скрытии, а не каскаду CSS.
		restreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restreDisplay = dataPriv.get(elem, "display");
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} еще {

				// Получение непустых значений путем временного принудительного изменения видимости
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Анимировать строчные элементы как строчные блоки
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Восстанавливаем исходное значение отображения в конце анимации показа/скрытия
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Реализовать анимацию показа/скрытия
	propTween = false;
	for ( prop in orig ) {

		// Общие настройки отображения/скрытия анимации этого элемента
		if ( !propTween ) {
			if (dataShow) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} еще {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Сохраняем значения hidden/visible для переключения, чтобы `.stop().toggle()` "отменяло" состояние.
			если (переключить) {
				dataShow.hidden = !hidden;
			}

			// Отображать элементы перед их анимацией
			если (скрытый) {
				showHide( [ elem ], true );
			}

			/* jshint -W083 */
			anim.done( function() {

				// Заключительный этап анимации «скрытия» — это фактическое скрытие элемента.
				если ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Настройка для каждого объекта недвижимости
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		если ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			если (скрытый) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// Передача CSSHook для camelCase, specialEasing и expand
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		значение = props[ индекс ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			значение = props[ индекс ] = значение[ 0 ];
		}

		если ( index !== name ) {
			props[ name ] = value;
			удалить свойства[ индекс ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			удалить свойства[ имя ];

			// Это не совсем $.extend, это не перезапишет существующие ключи.
			// Повторное использование 'index', поскольку у нас есть правильное 'name'
			for ( index in value ) {
				если ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} еще {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	результат var,
		остановился,
		индекс = 0,
		длина = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Не следует сопоставлять элемент с селектором :animated
			удалить tick.elem;
		} ),
		tick = function() {
			если ( остановлено ) {
				вернуть false;
			}
			var currentTime = fxNow || createFxNow(),
				оставшееся время = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Поддержка: только Android 2.3
				// Устаревшая ошибка, приводящая к сбою, не позволяет нам использовать `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				процент = 1 - температура,
				индекс = 0,
				длина = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			если (процент < 1 && длина ) {
				вернуть оставшееся;
			} еще {
				deferred.resolveWith( elem, [ animation ] );
				вернуть false;
			}
		},
		animation = deferred.promise( {
			элемент: элемент,
			свойства: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, параметры ),
			originalProperties: свойства,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			длительность: options.duration,
			подростков: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				возврат в промежуток;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// Если мы доходим до конца, нам нужно запустить все анимации.
					// В противном случае мы пропускаем эту часть
					длина = gotoEnd ? animation.tweens.length : 0;
				если ( остановлено ) {
					вернуть это;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Определяем момент, когда был сыгран последний кадр; в противном случае — отклоняем.
				if (gotoEnd) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} еще {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				вернуть это;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		если (результат) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			вернуть результат;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			элемент: элемент,
			аним: анимация,
			очередь: animation.opts.queue
		} )
	);

	// Прикрепить обратные вызовы из параметров
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend(Animation, {

	промежуточные элементы: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			возврат в промежуток;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} еще {
			props = props.match( rnotwhite );
		}

		var prop,
			индекс = 0,
			длина = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[prop] = Animation.tweeners[prop] || [];
			Animation.tweeners[prop].unshift(callback);
		}
	},

	предварительные фильтры: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		если (добавить в начало) {
			Animation.prefilters.unshift(callback);
		} еще {
			Animation.prefilters.push(callback);
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		длительность: скорость,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Перейти к конечному состоянию, если эффекты отключены или если документ скрыт
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} еще {
		opt.duration = typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	}

	// Нормализация opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Постановка в очередь
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if (opt.queue) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	вернуть опцию;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Отобразить все скрытые элементы после установки прозрачности в 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Анимировать до указанного значения
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Работайте с копией объекта недвижимости, чтобы не потерять информацию о смягчении условий для каждого объекта.
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Пустые анимации или завершение завершается немедленно
				if ( empty || dataPriv.get( this, "finish") ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if (typeof type !== "string") {
			gotoEnd = clearQueue;
			clearQueue = type;
			тип = не определен;
		}
		if (clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				таймеры = jQuery.timers,
				data = dataPriv.get( this );

			если (индекс) {
				if (data[index] && data[index].stop) {
					stopQueue( data[ index ] );
				}
			} еще {
				for ( index in data ) {
					if (data[index] && data[index].stop && rrun.test(index)) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					(type == null || timers[index].queue === type)) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Если предыдущий шаг не был принудительно выполнен, начните выполнение следующего шага в очереди.
			// В настоящее время таймеры вызывают свои полные функции обратного вызова, которые
			// Извлечёт из очереди, но только если это был gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		если (type !== false) {
			тип = тип || "fx";
		}
		return this.each(function() {
			индекс переменной,
				data = dataPriv.get( this ),
				очередь = данные[ тип + "очередь" ],
				hooks = data[ type + "queueHooks" ],
				таймеры = jQuery.timers,
				длина = очередь ? длина очереди : 0;

			// Включить флаг завершения для личных данных
			data.finish = true;

			// Сначала очистите очередь
			jQuery.queue( this, type, [] );

			if (hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Найдите все активные анимации и завершите их.
			for ( index = timers.length; index--; ) {
				if (timers[index].elem === this && timers[index].queue === type) {
					таймеры[индекс].anim.stop(true);
					timers.splice( index, 1 );
				}
			}

			// Найдите все анимации в старой очереди и завершите их.
			for ( index = 0; index < length; index++ ) {
				if (queue[index] && queue[index].finish) {
					queue[ index ].finish.call( this );
				}
			}

			// Выключить финишный флаг
			удалить данные.завершить;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	вар cssFn = jQuery.fn[имя];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Создание сочетаний клавиш для пользовательских анимаций
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate(props, speed, easing, callback);
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	переменный таймер,
		i = 0,
		таймеры = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		таймер = таймеры[i];

		// Проверяет, не был ли таймер еще удален
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if (timer()) {
		jQuery.fx.start();
	} еще {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if (window.cancelAnimationFrame) {
		window.cancelAnimationFrame( timerId );
	} еще {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	медленно: 600,
	быстро: 200,

	// Скорость по умолчанию
	_по умолчанию: 400
};


// Создано на основе плагина Клинта Хелферса с его разрешения.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	тип = тип || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


(function() {
	var input = document.createElement("input")
		select = document.createElement("select")
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Поддержка: только для Android <=4.3
	// Значение по умолчанию для флажка должно быть "включено"
	support.checkOn = input.value !== "";

	// Поддержка: только для IE <=11
	// Необходимо получить доступ к selectedIndex, чтобы параметры по умолчанию были выбраны.
	support.optSelected = opt.selected;

	// Поддержка: только для IE <=11
	// Входной сигнал теряет своё значение после преобразования в радиокнопку.
	input = document.createElement("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Не получать/устанавливать атрибуты для текстовых узлов, узлов комментариев и атрибутов
		если ( nType === 3 || nType === 8 || nType === 2 ) {
			возвращаться;
		}

		// В случае отсутствия поддержки атрибутов используется свойство в качестве резервного варианта.
		if (typeof elem.getAttribute === "undefined") {
			return jQuery.prop( elem, name, value );
		}

		// Обработчики атрибутов определяются версией в нижнем регистре
		// Если необходимая функция перехвата определена, она должна быть перехвачена.
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		если (значение !== undefined) {
			если (значение === null) {
				jQuery.removeAttr( elem, name );
				возвращаться;
			}

			если ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			возвращаемое значение;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Несуществующие атрибуты возвращают null, мы нормализуем их до undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		тип: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute("type", value);
					если ( val ) {
						elem.value = val;
					}
					возвращаемое значение;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		имя переменной,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if (attrNames && elem.nodeType === 1) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Хуки для булевых атрибутов
boolHook = {
	set: function( elem, value, name ) {
		если (value === false) {

			// Удаляет логические атрибуты, если установлено значение false
			jQuery.removeAttr( elem, name );
		} еще {
			elem.setAttribute( name, name );
		}
		возвращаемое имя;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		если ( !isXML ) {

			// Во избежание бесконечного цикла временно удалите эту функцию из геттера.
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				нулевой;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	свойство: функция( имя, значение ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			удалить это[ jQuery.propFix[ имя ] || имя ];
		} );
	}
} );

jQuery.extend( {
	свойство: функция( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Не получать/устанавливать свойства для текстовых узлов, узлов комментариев и атрибутов
		если ( nType === 3 || nType === 8 || nType === 2 ) {
			возвращаться;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Исправить название и прикрепить хуки
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		если (значение !== undefined) {
			если ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return (elem[name] = value);
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			получить: функция( elem ) {

				// Поддержка: только для IE <=9 - 11
				// elem.tabIndex не всегда возвращает
				// корректное значение, если оно не было задано явно
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Используйте корректное получение атрибутов (#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Поддержка: только для IE <=11
// Доступ к свойству selectedIndex
// заставляет браузер учитывать выбранные настройки
// по опции
// Геттер гарантирует выбор варианта по умолчанию
// при нахождении в группе опций
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		получить: функция( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			вернуть null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			если (родитель) {
				parent.selectedIndex;

				if (parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"только для чтения",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery(this).addClass(value.call(this, j, getClass(this)));
			} );
		}

		if (typeof value === "string" && value) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				если (cur) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Присваивать значение только в том случае, если оно отличается, чтобы избежать ненужной отрисовки.
					finalValue = jQuery.trim( cur );
					if (curValue !== finalValue) {
						elem.setAttribute("class", finalValue);
					}
				}
			}
		}

		вернуть это;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery(this).removeClass(value.call(this, j, getClass(this)));
			} );
		}

		if ( !arguments.length ) {
			return this.attr("class", "");
		}

		if (typeof value === "string" && value) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// Это выражение добавлено для лучшей сжимаемости (см. addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				если (cur) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Удалить *все* экземпляры
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Присваивать значение только в том случае, если оно отличается, чтобы избежать ненужной отрисовки.
					finalValue = jQuery.trim( cur );
					if (curValue !== finalValue) {
						elem.setAttribute("class", finalValue);
					}
				}
			}
		}

		вернуть это;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if (typeof stateVal === "boolean" && type === "string") {
			return stateVal ? this.addClass(value) : this.removeClass(value);
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each(function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Переключение названий отдельных классов
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Проверяем каждый указанный className, разделенный пробелами список
					if (self.hasClass(className)) {
						self.removeClass( className );
					} еще {
						self.addClass( className );
					}
				}

			// Переключить полное имя класса
			} else if ( value === undefined || type === "boolean") {
				className = getClass( this );
				if (className) {

					// Сохранить имя класса, если оно задано
					dataPriv.set( this, "__className__", className );
				}

				// Если у элемента есть имя класса или если нам передано значение `false`,
				// Затем удалите все имя класса (если оно было, приведенный выше код его сохранил).
				// В противном случае верните все, что было сохранено ранее (если таковое имелось).
				// Если ничего не было сохранено, используется пустая строка.
				if (this.setAttribute) {
					this.setAttribute("class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if (elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				вернуть true;
			}
		}

		вернуть false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			если (elem) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				если ( хуки &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Обработка наиболее распространенных вариантов написания строк
					ret.replace( rreturn, "" ) :

					// Обработка случаев, когда значение равно null/undef или number
					ret == null ? "" : ret;
			}

			возвращаться;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			если (this.nodeType !== 1) {
				возвращаться;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} еще {
				val = значение;
			}

			// Обрабатывать значения null/undefined как ""; преобразовывать числа в строки
			если (val == null) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function(value) {
					Возвращаемое значение == null ? "" : значение + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// Если set возвращает undefined, используем обычные настройки.
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		вариант: {
			получить: функция( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					вал :

					// Поддержка: только для IE <=10 - 11
					// option.text вызывает исключения (#14686, #14858)
					// Удалить и свернуть пробелы
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		выбирать: {
			получить: функция( elem ) {
				значение переменной, опция,
					options = elem.options,
					index = elem.selectedIndex,
					один = elem.type === "выберите-один",
					значения = один ? null : [],
					max = one ? index + 1 : options.length,
					i = индекс < 0 ?
						макс.
						один ? индекс : 0;

				// Проходим циклом по всем выбранным параметрам
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Поддержка: только для IE <=9
					// В IE8-9 выбранные элементы не обновляются после сброса формы (#2551)
					if ( ( option.selected || i === index ) &&

							// Не возвращать параметры, которые отключены или находятся в отключенной группе параметров.
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Получить конкретное значение для параметра
						value = jQuery( option ).val();

						// Для выбора одного элемента массив не нужен
						если (один) {
							возвращаемое значение;
						}

						// При выборе нескольких элементов возвращается массив
						values.push(value);
					}
				}

				возвращаемые значения;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					значения = jQuery.makeArray( значение ),
					i = options.length;

				пока ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ​​) > -1
					) {
						optionSet = true;
					}
				}

				// Принудительное обеспечение согласованного поведения браузеров при установке несовпадающего значения
				если ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				возвращаемые значения;
			}
		}
	}
} );

// Геттеры/сеттеры для радиокнопок и флажков
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[this].get = function(elem) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Возвращает jQuery для включения только атрибутов


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend(jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Не обрабатывайте события на текстовых и комментаторских узлах
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			возвращаться;
		}

		// Преобразуйте эффекты фокусировки/размытия в эффекты фокусировки (увеличение/уменьшение); убедитесь, что мы не запускаем их прямо сейчас.
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			возвращаться;
		}

		if (type.indexOf(".") > -1) {

			// Триггер с пространством имен; создайте регулярное выражение для сопоставления типа события в функции handle().
			namespaces = type.split( "." );
			тип = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Вызывающая сторона может передать объект jQuery.Event, объект Object или просто строку с типом события.
		event = event[ jQuery.expando ] ?
			событие :
			new jQuery.Event( type, typeof event === "object" && event );

		// Битовая маска триггера: & 1 для нативных обработчиков; & 2 для jQuery (всегда true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			нулевой;

		// Очистка события на случай его повторного использования
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Клонируйте все входящие данные и добавьте их в начало события, создав список аргументов обработчика.
		данные = данные == null ?
			[ событие ] :
			jQuery.makeArray(data, [event]);

		// Разрешить специальным событиям отображаться за пределами линий
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			возвращаться;
		}

		// Определите путь распространения события заранее в соответствии со спецификацией событий W3C (#9951)
		// Всплыть в документ, затем в окно; следить за глобальной переменной ownerDocument (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for (; cur; cur = cur.parentNode) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Добавляем окно только в том случае, если дошли до документа (например, не до обычного объекта или отсоединенного DOM).
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Запускаем обработчики событий на пути обработки событий
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// Обработчик jQuery
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get(cur, "дескриптор");
			если (handle) {
				handle.apply(cur, data);
			}

			// Собственный обработчик
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if (event.result === false) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// Если никто не предотвратил действие по умолчанию, выполните его сейчас.
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			если ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData(elem)) {

				// Вызываем собственный метод DOM целевого объекта с тем же именем, что и событие.
				// Не выполняйте действия по умолчанию для окна, для этого существуют глобальные переменные (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Не следует повторно запускать событие onFOO при вызове его метода FOO().
					tmp = elem[ ontype ];

					если (tmp) {
						elem[ ontype ] = null;
					}

					// Предотвращаем повторное срабатывание одного и того же события, поскольку мы уже передали его выше.
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					если (tmp) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Использовать событие, связанное с донором, для имитации другого события.
	// Используется только для событий `focus(in | out)`
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			новый jQuery.Event(),
			событие,
			{
				тип: тип,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		если (elem) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	функция( i, имя ) {

	// Обработка привязки событий
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
	}
} );




support.focusin = "onfocusin" в window;


// Поддержка: Firefox <=44
// В Firefox отсутствуют события focus(in | out).
// Связанная заявка - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Поддержка: Chrome <=48 - 49, Safari <=9.0 - 9.1
// События focus(in | out) срабатывают после событий focus и blur.
// что является нарушением спецификации - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Связанная заявка - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Прикрепите к документу единственный обработчик события, который будет захватывать фокус (вход/выход), пока пользователь хочет установить/снять фокус.
		вар-обработчик = функция (событие) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			настройка: функция() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				если ( !attaches ) {
					doc.addEventListener(оригинал, обработчик, правда);
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				если ( !attaches ) {
					doc.removeEventListener(оригинал, обработчик, правда);
					dataPriv.remove( doc, fix );

				} еще {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Кроссбраузерный анализ XML
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		вернуть null;
	}

	// Поддержка: только для IE 9-11
	// В Internet Explorer возникает ошибка при вызове функции parseFromString с недопустимым вводом.
	пытаться {
		xml = (new window.DOMParser()).parseFromString(data, "text/xml");
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error("Неверный XML: " + data );
	}
	возвращаем XML;
};


вар
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	имя переменной;

	if ( jQuery.isArray( obj ) ) {

		// Сериализация элемента массива.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Рассматривайте каждый элемент массива как скаляр.
				add( prefix, v );

			} еще {

				// Если элемент не является скалярным (массив или объект), закодируйте его числовой индекс.
				buildParams(
					префикс + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					в,
					традиционный,
					добавлять
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Сериализация элемента объекта.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} еще {

		// Сериализация скалярного элемента.
		add( prefix, obj );
	}
}

// Сериализация массива элементов формы или набора
// преобразование пар ключ/значение в строку запроса
jQuery.param = function( a, traditional ) {
	префикс переменной,
		s = [],
		add = function( key, valueOrFunction ) {

			// Если значение является функцией, вызовите её и используйте её возвращаемое значение.
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// Если был передан массив, предполагается, что это массив элементов формы.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Сериализация элементов формы
		jQuery.each( a, function() {
			добавить( this.name, this.value );
		} );

	} еще {

		// Если используется традиционный способ кодирования, используйте «старый» способ (способ версии 1.3.2 или более ранних).
		// сделано), в противном случае кодировать параметры рекурсивно.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Возвращает полученный результат сериализации
	return s.join( "&" );
};

jQuery.fn.extend( {
	сериализация: функция() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Можно добавить propHook для "elements" для фильтрации или добавления элементов формы.
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Используйте .is( ":disabled" ), чтобы fieldset[disabled] работал.
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				(this.checked || !rcheckableType.test(type));
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				нулевой :
				jQuery.isArray(val) ?
					jQuery.map(val, function(val) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).получать();
	}
} );


вар
	r20 = /%20/г,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: определение локального протокола
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Предфильтры
	 * 1) Они полезны для ввода пользовательских типов данных (см. пример в ajax/jsonp.js)
	 * 2) Они называются:
	 * - ПЕРЕД тем, как запрашивать транспорт
	 * - ПОСЛЕ сериализации параметров (s.data — строка, если s.processData равно true)
	 * 3) ключом является тип данных
	 * 4) можно использовать общий символ "*".
	 * 5) Выполнение начнется с транспортного типа данных, а затем продолжится до «*», если потребуется.
	 */
	префильтры = {},

	/* Привязки транспортных протоколов
	 * 1) ключом является тип данных
	 * 2) можно использовать общий символ "*".
	 * 3) Выбор начнется с параметра «Тип данных транспорта», а затем, при необходимости, перейдет к символу «*».
	 */
	транспорты = {},

	// Избегайте последовательности символов в прологе комментария (#10098); необходимо угодить линтеру и избежать сжатия.
	allTypes = "*/".concat( "*" ),

	// Тег привязки для анализа источника документа
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

// Базовый "конструктор" для jQuery.ajaxPrefilter и jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// Параметр dataTypeExpression является необязательным и по умолчанию равен "*"
	return function( dataTypeExpression, func ) {

		if (typeof dataTypeExpression !== "string") {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// Для каждого типа данных в выражении типа данных
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Добавить в начало, если необходимо
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// В противном случае добавить
				} еще {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Базовая функция проверки предварительных фильтров и транспортных устройств
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		выбрана переменная;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				вернуть false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		вернуть выбранное;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// Специальное расширение для параметров JAX
// принимает "плоские" параметры (не требующие глубокого расширения)
// Исправляет ошибку #9887
function ajaxExtend( target, src ) {
	ключ var, глубокий,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
		}
	}
	если (глубокий) {
		jQuery.extend( true, target, deep );
	}

	возвращаемый целевой объект;
}

/* Обрабатывает ответы на JAX-запросы:
 * - находит правильный тип данных (выступает посредником между типом содержимого и ожидаемым типом данных)
 * - возвращает соответствующий ответ
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, тип, FinalDataType, FirstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Удалить автоматический тип данных и получить тип содержимого в процессе
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		если (ct === undefined) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Проверяем, имеем ли мы дело с известным типом контента
	если (ct) {
		для (введите содержимое) {
			if (contents[type] && contents[type].test(ct)) {
				dataTypes.unshift( type );
				перерыв;
			}
		}
	}

	// Проверяем, получили ли мы ответ с ожидаемым типом данных.
	if ( dataTypes[ 0 ] in responses ) {
		FinalDataType = DataTypes [0];
	} еще {

		// Попробуйте конвертируемые типы данных
		для (ввод ответов) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				перерыв;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Или просто используйте первый вариант
		FinalDataType = FinalDataType || ПервыйТипДанных;
	}

	// Если мы нашли тип данных
	// При необходимости добавляем тип данных в список
	// и вернуть соответствующий ответ
	if (finalDataType) {
		if (finalDataType!== dataTypes[0]) {
			dataTypes.unshift(finalDataType);
		}
		вернуть ответы [finalDataType];
	}
}

/* Преобразование цепочки с учетом запроса и исходного ответа
 * Также устанавливает поля responseXXX в экземпляре jqXHR.
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		конвертеры = {},

		// Работаем с копией dataTypes на случай, если потребуется изменить их для преобразования.
		dataTypes = s.dataTypes.slice();

	// Создать карту конвертеров с ключами в нижнем регистре
	если ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Преобразовать в каждый последовательный тип данных
	пока (текущий) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Примените фильтр данных, если он предоставлен
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		предыдущий = текущий;
		current = dataTypes.shift();

		если (текущий) {

			// Работа выполняется только в том случае, если текущий тип данных не является автоматическим.
			if ( current === "*" ) {

				текущий = предыдущий;

			// Преобразовать ответ, если предыдущий тип данных не является автоматическим и отличается от текущего.
			} else if ( prev !== "*" && prev !== current ) {

				// Найти прямой конвертер
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// Если ничего не найдено, поищите пару
				если ( !conv ) {
					for ( conv2 in converters ) {

						// Если conv2 выдает текущий результат
						tmp = conv2.split( " " );
						если (tmp[1] === current) {

							// Если предыдущий ввод может быть преобразован в допустимый ввод
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								конвертеры[ "* " + tmp[ 0 ] ];
							если ( conv ) {

								// Конденсация преобразователей эквивалентности
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// В противном случае, вставьте промежуточный тип данных
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								перерыв;
							}
						}
					}
				}

				// Применить преобразователь (если нет эквивалента)
				if ( conv !== true ) {

					// Если ошибки не допускаются к дальнейшему распространению, перехватывайте и возвращайте их.
					if ( conv && s.throws ) {
						response = conv( response );
					} еще {
						пытаться {
							response = conv( response );
						} catch ( e ) {
							возвращаться {
								состояние: "ошибка парсера",
								ошибка: conv ? e : "Не удалось выполнить преобразование из " + prev + " в " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Счетчик для хранения количества активных запросов
	активен: 0,

	// Кэш заголовка LastMosified для следующего запроса
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		тип: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		глобальный: true,
		processData: true,
		асинхронный режим: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		таймаут: 0,
		данные: null,
		Тип данных: null,
		имя пользователя: null,
		пароль: null,
		кэш: null,
		throws: false,
		традиционный: ложный,
		заголовки: {},
		*/

		принимает: {
			"*": allTypes,
			текст: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		содержимое: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			текст: "responseText",
			json: "responseJSON"
		},

		// Преобразователи данных
		// Ключи разделяют типы источника (или универсальный "*") и назначения одним пробелом
		конвертеры: {

			// Преобразовать любой текст
			"* текст": Строка,

			// Преобразование текста в HTML (true = без преобразования)
			"text html": true,

			// Анализ текста как выражения JSON
			"text json": JSON.parse,

			// Анализ текста как XML
			"текстовый XML": jQuery.parseXML
		},

		// Для параметров, которые не должны быть глубоко расширены:
		// Здесь вы можете добавить свои собственные пользовательские параметры, если
		// и когда вы создаете то, чего не должно быть
		// Глубокое расширение (см. ajaxExtend)
		flatOptions: {
			url: true,
			контекст: истина
		}
	},

	// Создает полноценный объект настроек в целевом объекте
	// с полями ajaxSettings и settings.
	// Если целевой объект не указан, запись производится в ajaxSettings.
	ajaxSetup: function( target, settings ) {
		настройки возврата?

			// Создание объекта настроек
			ajaxExtend( ajaxExtend(target, jQuery.ajaxSettings), настройки):

			// Расширение ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, цель);
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Основной метод
	ajax: function( url, options ) {

		// Если url является объектом, имитировать подпись, существовавшую до версии 1.5.
		if (typeof url === "object") {
			options = url;
			url = undefined;
		}

		// Принудительно преобразуйте параметры в объект
		options = options || {};

		транспортный вариант,

			// URL без параметра антикэширования
			cacheURL,

			// Заголовки ответа
			responseHeadersString,
			responseHeaders,

			// обработчик таймаута
			timeoutTimer,

			// Переменная для очистки URL-адреса
			urlAnchor,

			// Состояние запроса (становится false при отправке и true по завершении)
			завершенный,

			// Чтобы узнать, следует ли отправлять глобальные события
			fireGlobals,

			// Переменная цикла
			я,

			// некэшированная часть URL
			некэшированный,

			// Создание итогового объекта параметров
			s = jQuery.ajaxSetup( {}, options ),

			// Контекст обратных вызовов
			callbackContext = s.context || s,

			// Контекст для глобальных событий — callbackContext, если это узел DOM или коллекция jQuery.
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery(callbackContext):
					jQuery.event,

			// Отложенные
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),

			// Коллбэки, зависящие от статуса
			statusCode = s.statusCode || {},

			// Заголовки (они отправляются все сразу)
			requestHeaders = {},
			requestHeadersNames = {},

			// Сообщение об отмене по умолчанию
			strAbort = "отменено",

			// Поддельный xhr
			jqXHR = {
				readyState: 0,

				// При необходимости создает хэш-таблицу заголовков
				getResponseHeader: function( key ) {
					var match;
					если ( завершено ) {
						если ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Необработанная строка
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Кэширует заголовок
				setRequestHeader: function( name, value ) {
					если (completed == null) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					вернуть это;
				},

				// Переопределяет заголовок content-type ответа
				overrideMimeType: function( type ) {
					если (completed == null) {
						s.mimeType = type;
					}
					вернуть это;
				},

				// Коллбэки, зависящие от статуса
				statusCode: function( map ) {
					переменная code;
					если (map) {
						если ( завершено ) {

							// Выполнить соответствующие функции обратного вызова
							jqXHR.always( map[ jqXHR.status ] );
						} еще {

							// Лениво добавляем новые коллбэки таким образом, чтобы сохранить старые.
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					вернуть это;
				},

				// Отменить запрос
				прерывание: функция( statusText ) {
					вар FinalText = statusText || стрАборт;
					если (транспорт) {
						transport.abort(finalText);
					}
					выполнено( 0, finalText );
					вернуть это;
				}
			};

		// Прикрепить отложенные операции
		deferred.promise( jqXHR );

		// Добавить протокол, если он не указан (префильтры могут его ожидать)
		// Обработка ложных URL-адресов в объекте настроек (#10093: согласованность со старой подписью)
		// Мы также используем параметр url, если он доступен.
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Параметр псевдонима для ввода в соответствии с заявкой № 12004
		s.type = options.method || options.type || s.method || s.type;

		// Извлечь список типов данных
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// Междоменный запрос необходим, когда источник не совпадает с текущим источником.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement("a");

			// Поддержка: IE <=8 - 11, Edge 12 - 13
			// Internet Explorer выдает исключение при обращении к свойству href, если URL-адрес имеет некорректный формат.
			// например, http://example.com:80x/
			пытаться {
				urlAnchor.href = s.url;

				// Поддержка: только для IE <=8 - 11
				// Свойство host объекта Anchor устанавливается некорректно, если s.url является относительным.
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// Если при разборе URL-адреса возникает ошибка, считайте, что это кроссдоменный запрос.
				// Если оно недействительно, транспорт может его отклонить.
				s.crossDomain = true;
			}
		}

		// Преобразовать данные, если они еще не являются строкой
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Применить предварительные фильтры
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// Если запрос был прерван внутри предварительного фильтра, остановитесь там.
		если ( завершено ) {
			return jqXHR;
		}

		// На данный момент мы можем запускать глобальные события по запросу.
		// Не следует запускать события, если jQuery.event не определен в сценарии использования AMD (#15118)
		fireGlobals = jQuery.event && s.global;

		// Ожидайте появления нового набора запросов
		if (fireGlobals && jQuery.active++ === 0) {
			jQuery.event.trigger("ajaxStart");
		}

		// Введите тип в верхнем регистре
		s.type = s.type.toUpperCase();

		// Определяем, содержит ли запрос контент
		s.hasContent = !rnoContent.test( s.type );

		// Сохраняем URL-адрес на случай, если мы будем экспериментировать с условием If-Modified-Since
		// и/или заголовок If-None-Match позже
		// Удаляем хеш для упрощения работы с URL-адресами
		cacheURL = s.url.replace( rhash, "" );

		// Дополнительная обработка запросов без содержимого
		if ( !s.hasContent ) {

			// Запомните хеш, чтобы мы могли его восстановить
			uncached = s.url.slice( cacheURL.length );

			// Если данные доступны, добавьте их к URL-адресу
			если ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: удалить данные, чтобы они не использовались при последующей повторной попытке
				удалить s.data;
			}

			// При необходимости добавьте антикэш в некэшируемый URL.
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rts, "" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Добавляем хеш и антикэш к запрашиваемому URL (gh-1732)
			s.url = cacheURL + uncached;

		// Замените '%20' на '+', если это закодировано из содержимого тела документа (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Установите заголовок If-Modified-Since и/или If-None-Match, если используется режим ifModified.
		если ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
			}
		}

		// Установите правильный заголовок, если данные отправляются.
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader("Content-Type", s.contentType);
		}

		// Устанавливает заголовок Accepts для сервера в зависимости от типа данных.
		jqXHR.setRequestHeader(
			"Принимать",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Проверить наличие опции заголовков
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Разрешить использование пользовательских заголовков/типов MIME и досрочное прерывание
		если ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Прервать выполнение, если оно еще не было выполнено, и вернуться
			return jqXHR.abort();
		}

		// Отмена действия больше не является аннулированием
		strAbort = "abort";

		// Устанавливаем функции обратного вызова для отложенных вызовов
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Получить транспорт
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// Если транспорт не указан, мы автоматически прерываем процесс.
		если ( !транспорт ) {
			выполнено( -1, "Нет транспортировки" );
		} еще {
			jqXHR.readyState = 1;

			// Отправить глобальное событие
			if (fireGlobals) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Если запрос был прерван внутри функции ajaxSend, остановитесь там.
			если ( завершено ) {
				return jqXHR;
			}

			// Тайм-аут
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			пытаться {
				завершено = ложно;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Повторно выбрасывать исключения после завершения
				если ( завершено ) {
					бросить e;
				}

				// Распространять другие результаты
				выполнено(-1, e);
			}
		}

		// Функция обратного вызова, которая срабатывает по завершении всех действий
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Игнорировать повторные вызовы
			если ( завершено ) {
				возвращаться;
			}

			completed = true;

			// Сбросить таймаут, если он существует
			if (timeoutTimer) {
				window.clearTimeout( timeoutTimer );
			}

			// Разыменование транспортного уровня для ранней сборки мусора
			// (независимо от того, как долго будет использоваться объект jqXHR)
			транспорт = не определено;

			// Кэширование заголовков ответа
			responseHeadersString = headers || "";

			// Установить состояние готовности
			jqXHR.readyState = статус > 0? 4:0;

			// Определить, был ли успех
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Получение данных ответа
			если (ответы) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Преобразовывать независимо от обстоятельств (таким образом, поля responseXXX всегда будут заданы)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// В случае успеха обработайте цепочку типов
			если (isSuccess) {

				// Установите заголовок If-Modified-Since и/или If-None-Match, если используется режим ifModified.
				если ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					если (изменено) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					если (изменено) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// если нет содержимого
				if ( status === 204 || s.type === "HEAD") {
					statusText = "nocontent";

				// если не изменено
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// Если у нас есть данные, давайте их преобразуем.
				} еще {
					statusText = response.state;
					успех = response.data;
					ошибка = response.error;
					isSuccess = !error;
				}
			} еще {

				// Извлекаем сообщение об ошибке из statusText и нормализуем его для случаев, не являющихся прерыванием.
				ошибка = statusText;
				if (status || !statusText) {
					statusText = "error";
					если (статус < 0) {
						статус = 0;
					}
				}
			}

			// Установка данных для фиктивного объекта xhr
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Успех/Ошибка
			если (isSuccess) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} еще {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Коллбэки, зависящие от статуса
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if (fireGlobals) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Полный
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if (fireGlobals) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Обработка глобального счетчика AJAX-запросов
				если ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[method] = function(url, data, callback, type) {

		// Сдвиг аргументов, если аргумент данных был опущен
		if ( jQuery.isFunction( data ) ) {
			тип = тип || обратный вызов;
			callback = data;
			данные = неопределено;
		}

		// URL может быть объектом параметров (который, в свою очередь, должен иметь свойство .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			тип: метод,
			dataType: тип,
			данные: данные,
			успех: обратный вызов
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Необходимо явно указать это, поскольку пользователь может переопределить это через ajaxSetup (#11264)
		тип: "GET",
		dataType: "script",
		кэш: true,
		асинхронный режим: false,
		глобальный: false,
		"броски": истина
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		если ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// Элементы, вокруг которых будет заключен целевой объект
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			если (this[0].parentNode) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while (elem.firstElementChild) {
					элемент = элемент.firstElementChild;
				}

				вернуть элемент;
			} ).append( this );
		}

		вернуть это;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery(this).wrapInner(html.call(this, i));
			} );
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if (contents.length) {
				contents.wrapAll( html );

			} еще {
				self.append(html);
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery(this).replaceWith(this.childNodes);
		} );
		вернуть это;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	пытаться {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// Файловый протокол всегда возвращает код состояния 0, предположим, что это 200.
		0: 200,

		// Поддержка: только для IE <=9
		// #1450: иногда IE возвращает 1223, когда должно быть 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function(options) {
	var callback, errorCallback;

	// Междоменные запросы разрешены только в том случае, если это поддерживается функцией XMLHttpRequest.
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		возвращаться {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					параметры.пароль
				);

				// Примените пользовательские поля, если они предоставлены
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// При необходимости переопределите тип MIME.
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// Заголовок X-Requested-With
				// Для междоменных запросов, учитывая условия предварительного запроса,
				// Подобно пазлу, мы просто никогда не устанавливаем его на всякий случай.
				// (Это всегда можно установить для каждого запроса отдельно или даже с помощью ajaxSetup)
				// Для запросов в пределах одного домена заголовок не будет изменяться, если он уже предоставлен.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Установить заголовки
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Перезвонить
				callback = function( type ) {
					return function() {
						если (callback) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							если (type === "abort") {
								xhr.abort();
							} else if ( type === "error" ) {

								// Поддержка: только для IE <=9
								// При ручном прерывании выполнения нативной функции IE9 выдает ошибку
								// Ошибки при любом доступе к свойству, кроме readyState
								if (typeof xhr.status !== "number") {
									complete( 0, "error" );
								} еще {
									полный(

										// Файл: протокол всегда возвращает статус 0; см. #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} еще {
								полный(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Поддержка: только для IE <=9
									// В IE9 отсутствует XHR2, но возникает ошибка при обработке бинарного файла (trac-11426)
									// Для нетекстовых данных XHR2 пусть обработку выполняет вызывающая сторона (gh-2498)
									( xhr.responseType || "text" ) !== "text" ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Прослушивание событий
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Поддержка: только для IE 9
				// Используйте onreadystatechange вместо onabort
				// для обработки необработанных прерываний
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} еще {
					xhr.onreadystatechange = function() {

						// Перед истечением времени ожидания проверьте состояние готовности (readyState), так как оно может измениться.
						if ( xhr.readyState === 4 ) {

							// Разрешить вызов функции onerror вызываться первой.
							// но это не позволит обработать прерывание по умолчанию
							// Также сохраните errorCallback в переменную
							// Поскольку доступ к xhr.onerror невозможен
							window.setTimeout(function() {
								если (callback) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Создание функции обратного вызова для прерывания
				callback = callback("abort");

				пытаться {

					// Отправьте запрос (это может вызвать исключение)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Повторно выбрасывать исключение только в том случае, если об этом еще не было сообщено как об ошибке.
					если (callback) {
						бросить e;
					}
				}
			},

			прерывание: функция() {
				если (callback) {
					перезвонить();
				}
			}
		};
	}
} );




// Предотвращает автоматическое выполнение скриптов, если не указан явный тип данных (см. gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Установить тип данных скрипта
jQuery.ajaxSetup( {
	принимает: {
		скрипт: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	содержимое: {
		скрипт: /\b(?:java|ecma)script\b/
	},
	конвертеры: {
		"текстовый скрипт": функция( текст ) {
			jQuery.globalEval( text );
			возвращаемый текст;
		}
	}
} );

// Обработка особых случаев кэширования и междоменных запросов
jQuery.ajaxPrefilter("script", function(s) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Транспортный механизм для привязки тега скрипта
jQuery.ajaxTransport("script", function(s) {

	// Этот транспорт обрабатывает только междоменные запросы
	if ( s.crossDomain ) {
		var script, callback;
		возвращаться {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).на(
					"ошибка загрузки",
					callback = function( evt ) {
						script.remove();
						callback = null;
						если ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Используйте нативные манипуляции с DOM, чтобы избежать наших уловок с AJAX-запросами, связанными с domManip.
				document.head.appendChild( script[ 0 ] );
			},
			прерывание: функция() {
				если (callback) {
					перезвонить();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Настройки JSONP по умолчанию
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[callback] = true;
		обратный вызов;
	}
} );

// Обнаружение, нормализация параметров и установка обратных вызовов для запросов JSONP
jQuery.ajaxPrefilter("json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Обрабатываем ситуацию, если ожидаемый тип данных — "jsonp" или если у нас есть параметр для установки.
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Получаем имя функции обратного вызова, запоминая связанное с ней ранее значение.
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Вставить функцию обратного вызова в URL или данные формы
		if (jsonProp) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Используйте преобразователь данных для получения JSON после выполнения скрипта
		s.converters[ "script json" ] = function() {
			если ( !responseContainer ) {
				jQuery.error( callbackName + " не был вызван" );
			}
			return responseContainer[0];
		};

		// Принудительное использование типа данных JSON
		s.dataTypes[ 0 ] = "json";

		// Установить функцию обратного вызова
		overwritten = window[ callbackName ];
		window[callbackName] = function() {
			responseContainer = arguments;
		};

		// Функция очистки (срабатывает после преобразователей)
		jqXHR.always( function() {

			// Если предыдущее значение не существовало, удалите его.
			если ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// В противном случае восстановить существующее значение
			} еще {
				window[callbackName] = overwritten;
			}

			// Сохранить как бесплатный файл
			if ( s[ callbackName ] ) {

				// Убедитесь, что повторное использование параметров не приведет к сбоям.
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Сохраните имя функции обратного вызова для дальнейшего использования
				oldCallbacks.push( callbackName );
			}

			// Вызываем функцию, если она была запущена и мы получили ответ.
			if (responseContainer && jQuery.isFunction(overwritten)) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Делегировать скрипту
		вернуть "скрипт";
	}
} );




// Поддержка: только Safari 8
// В Safari 8 документы создаются с помощью document.implementation.createHTMLDocument
// Сворачивание дочерних форм: вторая становится дочерней по отношению к первой.
// Поэтому эту меру безопасности необходимо отключить в Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Аргумент "data" должен быть строкой HTML-кода.
// контекст (необязательно): Если указан, фрагмент будет создан в этом контексте.
// по умолчанию используется документ
// keepScripts (необязательно): Если true, будут включены скрипты, переданные в HTML-строке
jQuery.parseHTML = function( data, context, keepScripts ) {
	if (typeof data !== "string") {
		возвращаться [];
	}
	if (typeof context === "boolean") {
		keepScripts = context;
		контекст = false;
	}

	var base, parsed, scripts;

	если ( !context ) {

		// Предотвращает немедленное выполнение скриптов или встроенных обработчиков событий
		// с помощью document.implementation
		if (support.createHTMLDocument) {
			context = document.implementation.createHTMLDocument( "" );

			// Установите базовый атрибут href для созданного документа
			// Таким образом, все разобранные элементы содержат URL-адреса.
			// основаны на URL документа (gh-2965)
			base = context.createElement("base");
			base.href = document.location.href;
			context.head.appendChild( base );
		} еще {
			контекст = документ;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Отдельный тег
	если (разобрано) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery(scripts).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Загрузка URL-адреса на страницу
 */
jQuery.fn.load = function( url, params, callback ) {
	селектор переменной, тип, ответ,
		self = this,
		off = url.indexOf( " " );

	если (off > -1) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// Если это функция
	if ( jQuery.isFunction( params ) ) {

		// Мы предполагаем, что это функция обратного вызова
		callback = params;
		params = undefined;

	// В противном случае, создайте строку параметров
	} else if (params && typeof params === "object") {
		тип = "POST";
	}

	// Если нам нужно изменить какие-либо элементы, отправьте запрос.
	если (self.length > 0) {
		jQuery.ajax( {
			url: url,

			// Если переменная "type" не определена, будет использован метод "GET".
			// Укажите явное значение этого поля, поскольку
			// Пользователь может переопределить это через метод ajaxSetup
			тип: тип || "GET",
			dataType: "html",
			данные: параметры
		} ).done( function( responseText ) {

			// Сохраняем ответ для использования в полном коллбэке
			ответ = аргументы;

			self.html( селектор ?

				// Если был указан селектор, найдите нужные элементы во фиктивном div.
				// Исключить скрипты, чтобы избежать ошибок «Отказано в доступе» в Internet Explorer.
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// В противном случае используйте полный результат
				responseText );

		// Если запрос выполнен успешно, эта функция получает значения из полей "data", "status", "jqXHR".
		// Но они игнорируются, потому что ответ был задан выше.
		// Если операция завершится неудачей, функция получит значения "jqXHR", "status", "error".
		} ).always( callback && function( jqXHR, status ) {
			self.each(function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	вернуть это;
};




// Добавляем набор функций для обработки распространенных событий AJAX
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], функция( i, тип ) {
	jQuery.fn[type] = function(fn) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).длина;
};




/**
 * Получает окно из элемента
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Сначала установите позицию на случай, если верхняя/левая границы заданы даже для статического элемента.
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Необходимо иметь возможность рассчитать позицию, если выполняется какое-либо из следующих условий.
		// Верхняя или левая сторона — это автоматический выбор, а положение может быть абсолютным или фиксированным
		if (calculatePosition) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} еще {
			curTop = parseFloat(curCSSTop) || 0;
			curLeft = parseFloat(curCSSLeft) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Используйте jQuery.extend здесь, чтобы разрешить изменение аргумента координат (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if (options.top != null) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if (options.left != null) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		если ( "using" in options ) {
			options.using.call( elem, props );

		} еще {
			curElem.css(props);
		}
	}
};

jQuery.fn.extend( {
	смещение: функция(опции) {

		// Сохранение цепочки вызовов для сеттера
		if ( arguments.length ) {
			return options === undefined ?
				этот :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		если ( !elem ) {
			возвращаться;
		}

		// Поддержка: только для IE <=11
		// Выполнение функции getBoundingClientRect на
		// Отключение узла в IE приводит к ошибке
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Убедитесь, что элемент не скрыт (display: none)
		if (rect.width || rect.height) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			возвращаться {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				слева: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Возвращает нули для отключенных и скрытых элементов (gh-2310)
		возвращаем прямоугольник;
	},

	позиция: функция() {
		если ( !this[ 0 ] ) {
			возвращаться;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Фиксированные элементы смещены относительно окна (parentOffset = {top:0, left: 0},
		// потому что это его единственный смещенный родительский элемент
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Предполагается, что метод getBoundingClientRect существует, когда вычисляемая позиция фиксирована.
			offset = elem.getBoundingClientRect();

		} еще {

			// Получить *реальный* offsetParent
			offsetParent = this.offsetParent();

			// Получить правильные смещения
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Добавить границы offsetParent
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Вычесть смещения родительского элемента и поля элемента
		возвращаться {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// Этот метод вернет documentElement в следующих случаях:
	// 1) Для элемента внутри iframe без offsetParent этот метод вернет
	// documentElement родительского окна
	// 2) Для скрытого или отсоединенного элемента
	// 3) Для элемента body или html, то есть в случае узла html, он вернет себя.
	//
	// но эти исключения никогда не представлялись в качестве реальных примеров использования
	// и могут считаться более предпочтительными результатами.
	//
	// Однако эта логика не гарантирована и может измениться в любой момент в будущем.
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Создайте методы scrollLeft и scrollTop
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	вар топ = "pageYOffset" === опора;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if (val === undefined) {
				return win ? win[ prop ] : elem[ method ];
			}

			если (выиграть) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} еще {
				elem[ method ] = val;
			}
		}, метод, val, arguments.length );
	};
} );

// Поддержка: Safari <=7 - 9.1, Chrome <=37 - 49
// Добавьте CSS-хуки для верхнего/левого угла с помощью jQuery.fn.position
// Ошибка Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Ошибка мигания индикатора: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// Метод getComputedStyle возвращает процентное значение, если указано значение для верхнего/левого/нижнего/правого угла;
// Вместо того чтобы делать модуль CSS зависимым от модуля offset, просто проверьте его наличие здесь.
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
		function( elem, computed ) {
			если (вычислено) {
				computed = curCSS( elem, prop );

				// Если curCSS возвращает процентное значение, в качестве запасного варианта используется смещение.
				return rnumnonpx.test( computed ) ?
					jQuery(elem).position()[prop] + "px" :
					вычислено;
			}
		}
	);
} );


// Создайте методы innerHeight, innerWidth, height, width, outerHeight и outerWidth
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Отступы заданы только для outerHeight и outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height возвращает ширину/высоту, включая полосы прокрутки (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Получить ширину или высоту документа
				if (elem.nodeType === 9) {
					doc = elem.documentElement;

					// Либо scroll[Ширина/Высота], либо offset[Ширина/Высота], либо client[Ширина/Высота],
					// тот, который больше
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "клиент" + имя ]
					);
				}

				Возвращаемое значение === не определено?

					// Получаем ширину или высоту элемента, запрашивая, но не принудительно используя parseFloat.
					jQuery.css( elem, type, extra ) :

					// Задайте ширину или высоту элемента
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	делегат: функция( селектор, типы, данные, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// (пространство имен) или (селектор, типы [, fn])
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Зарегистрируйтесь как именованный модуль AMD, поскольку jQuery может быть объединен с другими модулями.
// файлы, которые могут использовать define, но не через соответствующий скрипт конкатенации,
// распознает анонимные модули AMD. Именованный модуль AMD является наиболее безопасным и надежным.
// Способ регистрации. Используется jQuery в нижнем регистре, поскольку имена модулей AMD являются
// формируется на основе имен файлов, а jQuery обычно передается в нижнем регистре.
// Имя файла. Сделайте это после создания глобальной переменной, чтобы модуль AMD мог ее использовать, если потребуется.
// Чтобы скрыть эту версию jQuery, вызовите noConflict.

// Обратите внимание, что для максимальной переносимости следует использовать библиотеки, отличные от jQuery.
// объявляют себя анонимными модулями и избегают установки глобальной переменной, если
// Загрузчик AMD присутствует. jQuery — особый случай. Для получения дополнительной информации см.
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}





вар

	// Перекрытие jQuery в случае перезаписи
	_jQuery = window.jQuery,

	// Перемещаем символ $ в случае перезаписи
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if (deep && window.jQuery === jQuery) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Предоставляем доступ к идентификаторам jQuery и $, даже в AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// и CommonJS для эмуляторов браузеров (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}


return jQuery;
} ) );
 $(document).ready(function(){



  $("#intro h3").delay(1000).queue(function(n){

    $(this).toggleClass("fuller")

    n()

  })



  $("#intro a").delay(1400).queue(function(n){

    $(this).toggleClass("fuller2")

    n()

  })



   $("#intro a").hover(function(){

     $("#button-overlay").toggleClass("loader")

     $("#button-container a").toggleClass("loader2")

   })



   $("#menu-button").hover(function(){

     $("#menu-button").toggleClass("hover-animation")

     $("#menu-button").toggleClass("hover-color")

   })



   $('#nav-container ul li a').hover(function(){

  $('#nav-container ul li a').toggleClass('nav-animate');

  $(this).toggleClass('nav-animate')

    /* $(this).toggleClass('nav-shadow') */

});



  $("#menu-button").click(function (){

    $("#intro h3").toggleClass("fuller")

  

    $("#intro a").toggleClass('fuller2')



    $("#menu-button").toggleClass("animate")

    $("#menu-overlay").toggleClass("reveal")

    $("#menu-button").toggleClass("change-color")

    $("#menu-button").hover(function(){

      $("#menu-button").toggleClass('hover-color')

      $("#menu-button").toggleClass('hover-color2')

    })

    $("#nav-container").delay(200).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })

    $("#nav1").delay(400).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })



    $("#nav2").delay(600).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })



    $("#nav3").delay(800).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })

  })



})
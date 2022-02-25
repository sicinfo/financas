/**
 * @author moreira
 */

/** @typedef {import('systemjs') } System */

/** @typedef { import('axios').AxiosInstance } AxiosInstance */

/** @typedef { import('react') }  ReactJs */
/** @typedef { import('react').ReactPropTypes }  ReactPropTypes */
/** @typedef { import('react').Component }  ReactComponent */
/** @typedef { import('react').ChangeEventHandler } ReactChangeEventHandler */
/** @typedef { import('react').InputHTMLAttributes<HTMLInputElement> }  ReactInputAttributes */

/** @typedef { import('react-dom') }  ReactDom */

/** @typedef { import('react-router') }  ReactRouter */

/** @typedef { import('react-router-dom') }  ReactRouterDom */

/** @typedef { import('react-loadable') }  RouteLoadable */

/** @typedef { import('material-ui') } MaterialUi */

/** @typedef {import('arangojs').Database} ArangoDb */

/*******************************************************************/
/*******************************************************************/

/** 
 * @typedef DbCfg
 * @prop {string} databaseName
 * @prop {DbCfgAuth} auth
 */ /**
 * @typedef DbCfgAuth
 * @prop {string} username
 * @prop {string} [passwd]
 * @prop {string} [password]
 */

 /**
 * @typedef FinancasCache
 * @prop {Promise<ArangoDb>} [db]
 */ 

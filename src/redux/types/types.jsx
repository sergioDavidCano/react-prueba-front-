export const types ={
    //Eventos de auth
    authLogin: '[auth] Login',
    authLogout: '[Auth] Logout',
    authCheckingFinish: '[auth] Finish Login State',
    authStarlogin: '[auth] Start Login', 
    authStartRegister: '[auth] Start Register', 
    authStarTokenRenew: '[auth] Start Token Renew',
    authStartLogout:'[auth] Logout',
    //Pokemons 
    START_GET_POKEMONS:"START_GET_POKEMONS",
    SUCCESS_GET_POKEMONS: "SUCCESS_GET_POKEMONS",
    //Evenetos del modal
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',
    //eventos calendar
    eventStartAddNew: '[event] Add new',
    eventSetActive: '[event] Set Active',
    eventAddNew: '[event] Add new',
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',
    eventLoaded: '[event] Event loaded',
    eventLogout: '[event] Logout event',
    //Eventos de la tabla 
    tableStartNewInfo: '[table] Add new',
    tableSetActive: '[table] Set Active',
    tableNewInfo: '[table] Add new',
    tableUpdated: '[table] Table updated',
    tableDeleted: '[table] Table deleted',
    tableLoaded: '[table] Table loaded',
    tableLogout: '[table] Logout event'
}
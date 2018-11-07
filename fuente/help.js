const menus = {
    main: `
      particion [comando] <opciones>
  
      lista .............. muestra las particiones en modo lista
      suma ............... muestra las particiones como suma
      help ............... menú de ayuda
      versión ............ la versión del programa`,
  
    lista: `
      particion lista <número>
  
      <....> un número que pertencezca a los números naturales y lo suficientemente pequeño como para no hacer estallar su ordenador`,
    suma: `
      particion suma <número>
  
      <....> un número que pertencezca a los números naturales y lo suficientemente pequeño como para no hacer estallar su ordenador`,

  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const customeTheme = createMuiTheme({
    typography:{
        fontSize:20,
    }
})

export const customeThemeResponsive = responsiveFontSizes(customeTheme);
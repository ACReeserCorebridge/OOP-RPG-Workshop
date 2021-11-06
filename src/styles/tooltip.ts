export const Tooltip = {
    
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "base",
    },
    
    sizes: {
      sm: {
        fontSize: "sm",
        px: 4,
        py: 3,
      },
      md: {
        fontSize: "md",
        px: 6, 
        py: 4,
      },
    },
    
    variants: {
      default: {
        color: "white",
        bg: "gray.700",
        
      },
      damage: {
        bg: "red.500",
        color: "gray.100",
      },
      healthy: {
        bg: "green.700",
        color: "gray.100",
      },
      warning: {
        bg: "yellow.700",
        color: "gray.100",
      }
    },
    
    defaultProps: {
      size: "sm",
      variant: "default",
    },
  }
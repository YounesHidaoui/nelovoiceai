import { CALL_STATUS, useVapi } from "@/hooks/useVapi";
import { Loader2, Mic, Square } from "lucide-react";

const AssistantButton = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'start',
    },
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '130px',
      height: '130px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 150, 255, 0.1)',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: 'rgba(0, 255, 150, 0.3)',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.circle} onClick={toggleCall}>
        <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {callStatus === CALL_STATUS.ACTIVE ? (
            <path d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="square"></path>
          ) : callStatus === CALL_STATUS.LOADING ? (
            <Loader2 className="animate-spin" />
          ) : (
            <path d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z" stroke="#0000FF" strokeWidth="2" strokeLinecap="square"></path>
          )}
        </svg>
      </div>
    </div>
  );
};

export { AssistantButton };

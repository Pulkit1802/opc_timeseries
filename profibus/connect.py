from pyprofibus import Profibus
from storeData import storeRecievedData

def listen_to_profibus():
    profibus = Profibus()
    profibus.open()
    profibus.set_baudrate(9600)
    profibus.set_slave_address(1)

    try:
        while True:
            data_to_send = [0x01, 0x02, 0x03] 

            received_data = profibus.send_receive(data_to_send)
            process_received_data(received_data)

    except KeyboardInterrupt:
        print("Closing connection to Profibus.")
        profibus.close()

    except Exception as e:
        print("An error occured:", e)
        profibus.close()

def process_received_data(data):
    print("Received data:", data)
    storeRecievedData(data)


listen_to_profibus()
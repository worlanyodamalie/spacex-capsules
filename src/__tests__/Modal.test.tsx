import "@testing-library/jest-dom";
import { render  } from '@testing-library/react';
import Modal from "../components/Modal";

describe("Modal component" , () => {
    it("should render the Modal component correctly" , () => {
        render(
        <Modal
           isOpen={true}
           onClose ={() => false}
        > 
            
        </Modal>);
        
    })
})
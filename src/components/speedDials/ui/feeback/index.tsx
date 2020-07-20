import * as React from "react";
import MuiModal from "../../../modal";
import { Forms } from "easyformui";
import { FormControl, Button } from "@material-ui/core";

interface IFeedbackProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Feedback: React.FC<IFeedbackProps> = (props) => {
  const { setOpen, isOpen } = props;
  return (
    <div>
      <MuiModal
        open={isOpen}
        titleBackground="primary"
        title="Enviar una sugerencia:"
        handleClose={() => setOpen(false)}
      >
        <div style={{ paddingBottom: 20 }}>
          <Forms
            onSubmit={(data) => alert(JSON.stringify(data))}
            variant="filled"
            form={[
              {
                name: "asunto",
                label: "Asunto",
                md: 12,
                validation: true,
                type: "text",
              },
              {
                name: "message",
                label: "Mensage",
                md: 12,
                rows: 5,
                multiline: true,
                validation: true,
                type: "text",
              },
            ]}
          >
            {(isSubmitting) => (
              <FormControl margin="none" fullWidth>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant={"contained"}
                  color={"primary"}
                >
                  Enviar Sugerencia
                </Button>
              </FormControl>
            )}
          </Forms>
        </div>
      </MuiModal>
    </div>
  );
};

export default Feedback;

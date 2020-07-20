import * as React from "react";
import MuiModal from "../../../modal";
import { Forms } from "easyformui";
import { FormControl, Button } from "@material-ui/core";

interface IEmailProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Email: React.FC<IEmailProps> = (props) => {
  const { setOpen, isOpen } = props;
  return (
    <div>
      <MuiModal
        open={isOpen}
        titleBackground="primary"
        title="Quiero recibir una cotización:"
        handleClose={() => setOpen(false)}
      >
        <div style={{ paddingBottom: 20 }}>
          <Forms
            onSubmit={(data) => alert(JSON.stringify(data))}
            variant="filled"
            form={[
              {
                name: "email",
                label: "Email",
                md: 12,
                validation: true,
                type: "email",
              },
              {
                name: "message",
                label: "Mensage",
                initialValue:
                  "Hola quiero recibir una cotización de la venta a por mayor de los calzados.",
                md: 12,
                rows: 4,
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
                  Enviar Cotizacion
                </Button>
              </FormControl>
            )}
          </Forms>
        </div>
      </MuiModal>
    </div>
  );
};

export default Email;

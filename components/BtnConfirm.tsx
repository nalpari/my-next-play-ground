import { Box, Button } from "@mantine/core";

type BtnConfirmProps = {
  onOk: () => void;
};

export default function BtnConfirm({ onOk }: BtnConfirmProps) {
  return (
    <>
      <Box py={`xl`}>
        <Button variant={`filled`} onClick={onOk}>
          확인
        </Button>
      </Box>
    </>
  );
}

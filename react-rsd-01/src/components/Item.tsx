import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { green } from "@mui/material/colors";

interface ItemProps {
  item: {
    id: number;
    content: string;
    name: string;
  };
  remove: (id: number) => void;
}

export default function Item({ item, remove }: ItemProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TimeIcon fontSize="small" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              A few second ago
            </Typography>
          </Box>
          <IconButton size="small" onClick={() => remove(item.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <UserIcon fontSize="small" color="info" />
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

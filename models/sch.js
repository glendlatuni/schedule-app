import mongoose, { Schema} from "mongoose";

const schSchema = new Schema(
  {
    name: String,
    kind: String,
    address: String,
    leaders: String,
    liturgy: String,
    date: String,
  },
  {
    timestamp: true,
  }
);

const Sch = mongoose.models.Sch || mongoose.model("Sch", schSchema);

export default Sch;

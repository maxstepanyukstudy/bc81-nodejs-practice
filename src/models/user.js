import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

// note: using `this` so use function expression
userSchema.pre("save", function () {
  // note: username fallback - set email local-part as username if username is undefined
  if (!this.username) {
    this.username = this.email.split("@").at(0);
  }
});

export const User = model("User", userSchema);

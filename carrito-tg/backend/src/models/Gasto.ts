import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Gasto extends Model {
  public idgasto!: number;
  public categoria!: string;
  public cantidad!: number;
  public fecha!: Date;
}

Gasto.init(
  {
    idgasto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "gasto",
    timestamps: false,
  }
);

export default Gasto;

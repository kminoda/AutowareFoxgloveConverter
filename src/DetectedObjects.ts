import { Header } from "./Header";
import { ClassificationLabel } from "./ClassificationLabel";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Dimensions } from "./Dimensions";

export type DetectedObjects = {
  header: Header;
  objects: {
    existence_probability: number;
    classification: ClassificationLabel[];
    kinematics: {
      pose_with_covariance: {
        pose: {
          position: Position;
          orientation: Orientation;
        };
        covariance: Float64Array;
      };
      has_position_covariance: boolean;
      orientation_probability: number;
      twist_with_covariance: {
        twist: {
          linear: {
            x: number;
            y: number;
            z: number;
          };
          angular: {
            x: number;
            y: number;
            z: number;
          };
        };
        covariance: Float64Array;
      };
      has_twist: boolean;
      has_twist_covariance: boolean;
    };
    shape: {
      type: number;
      footprint: {
        points: {
          x: number;
          y: number;
        }[];
      };
      dimensions: Dimensions;
    };
  }[];
};
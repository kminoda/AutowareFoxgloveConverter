import { Header } from "./Header";
import { ClassificationLabel } from "./ClassificationLabel";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Dimensions } from "./Dimensions";

export type TrackedObjects = {
  header: Header;
  objects: {
    object_id: {
      uuid: Uint8Array;
    };
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
      acceleration_with_covariance: {
        accel: {
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
      is_stationary: boolean;
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
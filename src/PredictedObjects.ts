import { Header } from "./Header";
import { ClassificationLabel } from "./ClassificationLabel";
import { Position } from "./Position";
import { Orientation } from "./Orientation";
import { Dimensions } from "./Dimensions";

export type PredictedObjects = {
  header: Header;
  objects: {
    object_id: {
      uuid: Uint8Array;
    };
    existence_probability: number;
    classification: ClassificationLabel[];
    kinematics: {
      initial_pose_with_covariance: {
        pose: {
          position: Position;
          orientation: Orientation;
        };
        covariance: Float64Array;
      };
      initial_twist_with_covariance: {
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
      initial_acceleration_with_covariance: {
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
      predicted_paths: {
        path: {
          position: Position;
          orientation: Orientation;
        }[];
        time_step: {
          sec: number;
          nsec: number;
        };
        confidence: number;
      }[];
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